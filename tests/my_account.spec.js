import { test } from "@playwright/test"
import { MyAccountPage } from "../page-objects/MyAccountPage.js"

test.only("My Account using cookie injection", async ({ page }) => {
    const myAccount = new MyAccountPage(page)
    await myAccount.visit()

})