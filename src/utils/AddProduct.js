export const AddProduct = (params, mycart, updatecart, addTocart) => {
  const product = mycart.findIndex((item) => item.id === params.id);
  if (product !== -1) {
    mycart[product].quantity++;
    updatecart({ params, mycart });
  } else {
    addTocart(params);
  }
};
