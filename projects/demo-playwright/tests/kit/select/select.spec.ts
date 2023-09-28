import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {TuiSelectPO} from '../../../utils/page-objects/select.po';

const {describe, beforeEach} = test;

describe(`Select`, () => {
    describe(`Examples`, () => {
        let documentationPage: TuiDocumentationPagePO;

        beforeEach(async ({page}) => {
            await tuiGoto(page, `components/select`);

            documentationPage = new TuiDocumentationPagePO(page);
        });

        test(`checkmark size`, async () => {
            const example = documentationPage.getExample(`#template`);
            const select = new TuiSelectPO(example.locator(`tui-select`).first());

            await select.textfield.click();
            await expect(select.dropdown).toBeVisible();

            await expect(example).toHaveScreenshot(`01-checkmark-size.png`);
        });
    });
});