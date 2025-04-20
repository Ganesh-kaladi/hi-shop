function CheckIsInCart(id, cart) {
  return cart?.some((el) => el.id === id);
}

export default CheckIsInCart;
