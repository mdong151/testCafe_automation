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
    // key: backspace, enter
    await t.pressKey('backspace', { options })
    await t.navigateTo('url')
    await t.takeScreenshot()
    await t.takeElementScreenshot()
    await t.resizeWindow(800, 600)

    // Deep equal
    await t.expect('foo').eql('foo', 'message when failed', { options })
    await t.expect('foo').notEql('foo', 'message when failed', { options })
    // OK
    await t.expect('foo').ok()
    // Not OK
    await t.expect('foo').notOk()
    // Contains
    await t.expect('expected string').contains('expected')  // -> true
    // Greater or Less than
    await t.expect(10).gt(5)    // -> true
    await t.expect(10).gte(10)  // -> true

    // Within or not Within
    await t.expect(10).within(1, 100)    // -> true



})