class Products {
  constructor(){
    this.classNameActive = 'drinks-element__btn_active';
    this.labelAdd = 'Добавить в корзину';
    this.labelRemove = 'Удалить из корзины';
  }
  handleSetLocationStorage(el,id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);

    if(pushProduct) {
      el.classList.add(this.classNameActive);
      el.innerHTML= this.labelRemove;
    }else{
      el.classList.remove(this.classNameActive);
      el.innerHTML= this.labelAdd; 
    }
    headerPage.render(products.length);
  }
  render() {
    const productStore = localStorageUtil.getProducts();
    const list = document.createElement('ul');
    list.classList.add('container')
    catalog.forEach(({id, name, price, img })=>{
      let activeClass = '';
      let activeText = '';

      if(productStore.indexOf(-1)){
        activeText = this.labelAdd;
      }else{
        activeClass =' '+ this.classNameActive;
        activeText = this.labelRemove
      }
      list.innerHTML += `
      <li class ="drinks-element">
        <span class = "drinks-element__name">${name}</span>
        <img class = "drinks-element__img" src="${img}" />
        <span class = "drinks-element__price">${price} EUR</span>
        <button class = "drinks-element__btn ${activeClass}" onclick="productsPage.handleSetLocationStorage(this,'${id}')">
        ${activeText}
        </button>
      </li>
      `
    });
    
    rootProducts.appendChild(list)
  }
}

const productsPage = new Products();
productsPage.render()