import { expect } from "@playwright/test"

export class MyAccountPage {
    constructor(page) {
        this.page = page

        this.pageHeading = page.getByRole('heading', { name: 'My Account' })
    }

    visit = async () => {
        await this.page.goto("/my-account")
    }

    waitForPageHeading = async () => {
        await this.pageHeading.waitFor()
    }

}