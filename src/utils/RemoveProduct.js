export const RemoveProduct = (params, mycart, decrementCart) => {
  const product = mycart.findIndex((item) => item.id === params.id);
  if (mycart[product].quantity == 1) return;
  if (product !== -1) {
    mycart[product].quantity--;
    decrementCart({ params, mycart });
  }
};
