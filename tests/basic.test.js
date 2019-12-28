import { Selector, t } from 'testcafe'

// prettier-ignore
fixture`Test suite No. 1`
    .page`https://devexpress.github.io/testcafe/example/`


test('Test case No. 1', async t => {
    await t.typeText('#developer-name', 'Dong Nguyen')
    await t.click('#submit-button')
})