import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIsPresentPipe, TuiLetModule} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import {delayWhen, of, Subject} from 'rxjs';

@Component({
    standalone: true,
    imports: [CommonModule, TuiLetModule, TuiIsPresentPipe, TuiButtonDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    private readonly loadCountSubject = new Subject<void>();

    protected readonly count$ = of(0).pipe(delayWhen(() => this.loadCountSubject));

    protected loadCount(): void {
        this.loadCountSubject.next();
        this.loadCountSubject.complete();
    }
}