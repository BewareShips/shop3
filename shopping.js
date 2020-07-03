class Shopping {
  handleClear(){
    rootShopping.innerHTML = '';
  }

  render() {
    const productStore = localStorageUtil.getProducts();
    let sumCatalog = 0;
    let htmlCatalog = '';

    catalog.forEach(({id, name, price})=>{
      if (productStore.indexOf(id) !== -1) {
        htmlCatalog+=`
          <tr>
            <td class="shopping-element__name">  ${name}: </td>
            <td class="shopping-price__price"> ${price} Euro 💶</td>
          </tr>
        `;
        sumCatalog += price;
      }
    });
     
    const html = `
      <div class="shopping-container">
        <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
        <table>
          ${htmlCatalog}
          <tr>
            <td class="shopping-element__amount"> Сумма:  </td>
            <td class="shopping-price__price">${sumCatalog} Euro 🏷️</td>
        </tr>
        </table>
      </div>
    `;
    rootShopping.innerHTML = html;
  }
}

const shoppingPage = new Shopping();