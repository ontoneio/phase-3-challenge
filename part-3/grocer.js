const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".close")
const clearCart = document.querySelector("#clear-cart")
const basket = document.querySelector("#basket")

const cartButton = document.querySelector("#cart-button")
const addToCart = document.querySelector("#addItem")

const itemsInCart = []

// OPEN MODAL - CLOSE MODAL 
cartButton.addEventListener('click', () => modal.style.display = 'flex')
closeModal.addEventListener('click', () => modal.style.display = 'none')