class homeHeader {
    get logoTitle() {
        return $('#header_container > div.primary_header > div.header_label > div');
    }
    get cartIcon() {
        return $('#shopping_cart_container > a')
    }
    async cartIconClick() {
        await this.cartIcon.click();
    }
}
export default new homeHeader();
