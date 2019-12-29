import { Selector, t } from 'testcafe'

// prettier-ignore
fixture`Test suite No. 1`
    .page`https://devexpress.github.io/testcafe/example/`
    .before(async t => {
        // Test set up goes here
        // await runDatabaseReset()
    })
    .beforeEach(async t => {
        // run before each test
        await t.setTestSpeed(1)
        await t.setPageLoadTimeout(5000)
    })
    .after(async t => {
        // Cleaning test data
        // Logging and sending data to monitoring systems
    })
    .afterEach(async t => {
        // Run after each test
    })



test('Test case No. 1', async t => {
    await t.typeText('#developer-name', 'Dong Nguyen')
    await t.click('#submit-button')

    await t.expect(Selector('#article-header').innerText).contains('Nguyen')
})

test('Test case No. 2', async t => {
    const name_input = Selector('#developer-name')
    const submit_button = Selector('#submit-button')
    const articleText = Selector('#article-header').innerText

    await t.typeText(name_input, 'Dong Nguyen')
    await t.click(submit_button)
    // await t.wait(2000)
    await t.expect(articleText).contains('John')
})