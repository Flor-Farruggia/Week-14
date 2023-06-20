class LogOut {
    get menuButton() {
        return $('#react-burger-menu-btn');
    }
    get logOutButton() {
        return $('#logout_sidebar_link')
    }
    async menuClick() {
        await this.menuButton.click();
    }
    async logOutClick() {
        await this.logOutButton.waitForDisplayed();
        await this.logOutButton.click();
    }
}
export default new LogOut();