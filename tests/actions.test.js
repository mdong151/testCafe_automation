import { Selector, t } from 'testcafe'

fixture`Test suite No. 2`
    .page`https://devexpress.github.io/testcafe/example/`
    .before(async t => {

    })
    .beforeEach(async t => {

    })
    .after(async t => {

    })
    .afterEach(async t => {

    })

test.skip('Test case No. 1', async t => {
    await t.click('selector', { options })
    await t.doubleClick('selector', { options })
    await t.rightClick('selector', { options })
    await t.drag('selector', 200, 0, { options })
    await t.hover('selector', { options })
    await t.selectText('selector', { options })
    await t.typeText('selector', 'textToType', { options })
    //key: backspace, enter
    await t.pressKey('backspace', { options })
    await t.navigateTo('url')
    await t.takeScreenshot()
    await t.takeElementScreenshot()
    await t.resizeWindow(800, 600)
    



})