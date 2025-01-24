import { test } from "@playwright/test"
import { MyAccountPage } from "../page-objects/MyAccountPage.js"
import { getLoginToken } from "../api-calls/getLoginToken.js"
import { adminDetails } from "../data/userDetails.js"

test.only("My Account using cookie injectionand mocking network request", async ({ page }) => {
    // Make a request for the login token
    const loginToken = await getLoginToken(adminDetails.username, adminDetails.password)

    await page.route("**/api/user**", async (route, request) => {
        await route.fulfill({
            status: 500,
            contentType: "application/json",
            body: JSON.stringify({message: "PLAYWRIGHT ERROR FOR MOCKING"})

        })
    })

    // Inject login token into the browser
    const myAccount = new MyAccountPage(page)
    await myAccount.visit()
    // injecting cookies
    await page.evaluate((loginTokenInsideBrowserCode) => {
        document.cookie = "token=" + loginTokenInsideBrowserCode // using instead of loginToken as that is outside this function's code. 
    }, [loginToken]) // loginToken is used as the second argument and somehow this works!!
    await myAccount.visit()
    // Effectively this is going via the login page, retrieving the cookie so that the page uses
    // the same data to return the user to the my-account page - on a refresh for example
    await myAccount.waitForPageHeading()
    await myAccount.waitForErrorMessage()
    // await page.pause()
})

