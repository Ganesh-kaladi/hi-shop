export function checkOut(cart, shippingCharge, gst) {
  const subTotal = cart.reduce((sum, product) => {
    return sum + Number(product.quantity) * Number(product.price);
  }, 0);

  const gstAmt = gst * subTotal;

  const totalAmt = subTotal + gstAmt + shippingCharge;

  return {
    subTotal,
    shippingCharge,
    gstAmt: gstAmt.toFixed(2),
    totalAmt: totalAmt.toFixed(2),
  };
}
