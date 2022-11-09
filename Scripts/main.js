'use strict'

const navEmail=document.querySelector(".navbar-email");
const desktopMenu=document.querySelector(".desktop-menu");
const mobileMenu=document.querySelector(".mobile-menu");
const burgerMenu=document.querySelector(".menuImg");
const shoppingCartButton=document.querySelector(".nav_bar-ShoppingCart");
const shoppingCart = document.querySelector("#shoppingCartDetail");
const prouductDetail = document.querySelector("#productDetail");
const productDetailClose = document.querySelector(".product-detail-close");

function toggleElement(elemento){
    elemento.classList.toggle("inactive");
} 

navEmail.addEventListener("click",execute=>
{
    let isShoppingCartClosed=shoppingCart.classList.contains("inactive");
    if (!isShoppingCartClosed) {
        shoppingCart.classList.add("inactive");           
    }
    let isProductDetailClosed=prouductDetail.classList.contains("inactive");
    if (!isProductDetailClosed) {
        prouductDetail.classList.add("inactive");           
    }  
    toggleElement(desktopMenu);      
});

burgerMenu.addEventListener("click",execute=>
{
    let isShoppingCartClosed=shoppingCart.classList.contains("inactive");
    if (!isShoppingCartClosed) {
        shoppingCart.classList.add("inactive");           
    }
    let isProductDetailClosed=prouductDetail.classList.contains("inactive");
    if (!isProductDetailClosed) {
        prouductDetail.classList.add("inactive");           
    }      
    toggleElement(mobileMenu);
});

shoppingCartButton.addEventListener("click",execute=>
{
    let isMobileMenuClosed=mobileMenu.classList.contains("inactive");
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");           
    }
    let isProductDetailClosed=prouductDetail.classList.contains("inactive");
    if (!isProductDetailClosed) {
        prouductDetail.classList.add("inactive");           
    }
    let isDesktopMenuClosed=desktopMenu.classList.contains("inactive");
    if (!isDesktopMenuClosed) {  
         desktopMenu.classList.add("inactive");
     }     
    toggleElement(shoppingCart);
});

productDetailClose.addEventListener("click",exec=>{
    prouductDetail.classList.add("inactive");
});

function createDynamicTestProducts(){
    const productList = [];
    for (let index = 0; index < 10; index++) {
        productList.push({
            name:"Bike",
            price:"120,00",
            img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        })   
    }
    return productList;
}

function setDynamicTestProductsToDOM(productList){
    const divCardsContainer = document.querySelector(".card-container");
    productList.forEach(element => {
        let divProductCard = document.createElement("div");
        divProductCard.classList.add("product-card");  
        let imgProduct=document.createElement("img");
        imgProduct.classList.add("product-img");
        imgProduct.setAttribute("src",element.img);
        imgProduct.addEventListener("click",exec=>{
            let isDesktopMenuClosed=desktopMenu.classList.contains("inactive");
            if (!isDesktopMenuClosed) {  
                 desktopMenu.classList.add("inactive");
             }
             let isShoppingCartClosed=shoppingCart.classList.contains("inactive");
             if (!isShoppingCartClosed) {
                 shoppingCart.classList.add("inactive");           
             }
             let isMobileMenuClosed=mobileMenu.classList.contains("inactive");
             if (!isMobileMenuClosed) {
                 mobileMenu.classList.add("inactive");           
             }     
            prouductDetail.classList.remove("inactive");
        });   
        let divProductInfo=document.createElement("div");
        divProductInfo.classList.add("product-info");  
        let divForDetails=document.createElement("div");  
        let pPrice=document.createElement("p");
        pPrice.innerText=element.price;
        let pName=document.createElement("p");
        pName.innerText=element.name;   
        let figure=document.createElement("figure");
        let imgFigure=document.createElement("img");
        imgFigure.setAttribute("src","./Icons/bt_add_to_cart.svg");  
        figure.appendChild(imgFigure);   
        divForDetails.append(pPrice,pName);   
        divProductInfo.append(divForDetails,figure);  
        divProductCard.append(imgProduct,divProductInfo);  
        divCardsContainer.appendChild(divProductCard);
    });
    
}

window.addEventListener("load",execute=>
{
    setDynamicTestProductsToDOM(createDynamicTestProducts());
});






