export const cart=[];

export function addToCart (productId) {
  const matchingcartItem=cart.find(product => product.productId===productId);

          if(matchingcartItem)
          {
            matchingcartItem.quantity++;
          }
          else
          {
            cart.push({
            productId: productId,
            quantity: 1
          });
          }

}; 

export function updateCartQuantity () {
let cartQuantity=0;

          cart
           .forEach((cartItem) => {
            cartQuantity+=cartItem.quantity;
           });

           document.querySelector('.js-cart-quantity')
              .innerHTML=cartQuantity;
};
