export const cart = [];

export function addToCart(productId) {

  let cartQuantitySelection = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

  let matchingItem;
  
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    } 
  });

  if (matchingItem) {
    matchingItem.quantity += 1 * cartQuantitySelection;
  } else {

    cart.push({
      productId: productId, 
      quantity: 1 * cartQuantitySelection,
    });
  }

};
