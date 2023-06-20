class firstItemObject {
    get firstItemTitle() {
        return $('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > #item_4_title_link > div');
    }
    get firstItemImg() {
        return $('#item_4_img_link > img')
    }
    get firstItemPrice() {
        return $('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div')
    }
    get firstItemAddButton() {
        return $('#add-to-cart-sauce-labs-backpack')
    }
    get firstItemRemoveButton() {
        return $('#remove-sauce-labs-backpack')
    }
    async firstItemButtonClick() {
        await this.firstItemAddButton.click();
    }
    async firstItemRemoveButtonClick() {
        await this.firstItemRemoveButton.click();
    }
    async firstItemClick() {
        await this.firstItemTitle.click();
    }
}

export default new firstItemObject();