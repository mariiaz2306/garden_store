export const loadCartItems = () => {
  const savedCart = localStorage.getItem('cart')
  return savedCart ? JSON.parse(savedCart) : []
}

export const saveCartItems = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}
