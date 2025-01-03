import * as dotenv from "dotenv"
dotenv.config()
import { test } from "@playwright/test"
import { MyAccountPage } from "../page-objects/MyAccountPage.js"
import { getLoginToken } from "../api-calls/getLoginToken.js"
import { adminDetails } from "../data/userDetails.js"

test.only("My Account using cookie injection", async ({ page }) => {
    // Make a request for the login token
    const loginToken = await getLoginToken(adminDetails.username, adminDetails.password)
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
})

