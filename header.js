class Header{
handleOpenShoppingPage() {
  shoppingPage.render()
}

  render(count){
    const html =`
      <div class="header-counter">
        <div class="header-counter" onclick="headerPage.handleOpenShoppingPage();">☕️ ${count}</div>
      </div>
    `;
    rootHeader.innerHTML = html
  }
}

const headerPage = new Header()
const productStore = localStorageUtil.getProducts();

headerPage.render(productStore.length)