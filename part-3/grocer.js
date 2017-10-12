const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".close")
const clearCart = document.querySelector("clear-cart")
const basket = document.querySelector("basket")

const cartButton = document.querySelector("#cart-button")
const addToCart = document.querySelectorAll("#addItem")
const cartItemCount = document.querySelector('#cart-item-count')

let itemsInCart = 0
let cartTotal = 0

// OPEN MODAL - CLOSE MODAL 
cartButton.addEventListener('click', () => modal.style.display = 'flex')
closeModal.addEventListener('click', () => modal.style.display = 'none')

// ADD ITEMS TO CART
cartItemCount.innerHTML = `(${itemsInCart})`

const getItem = () => {
  const data = document.querySelector('.item');
  const itemObj = {
    name: data.children[0].innerHTML,
    price: data.children[1].innerHTML
  }
  return itemObj
}
getItem()

addToCart.forEach(button => {
  button.addEventListener('click', () => {
    let updatedNumber = itemsInCart += 1
    cartItemCount.innerHTML = updatedNumber    
    console.log(`YOU ADDED AN ITEM! ${updatedNumber}`);
  })
})


