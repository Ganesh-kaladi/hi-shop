function CheckIsInCart(id, cart) {
  console.log(id, cart);
  return cart?.some((el) => el._id === id);
}

export default CheckIsInCart;
