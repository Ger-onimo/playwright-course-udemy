export class MyAccountPage {
    constructor(page) {
        this.page = page

    }

    visit = async () => {
        await this.page.goto("/my-account")
        // await this.page.pause()
    }

}