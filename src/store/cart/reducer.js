const initialState = {
  all: [],
};

export default function cartReducer(state = initialState, action) {
  console.log("payloadcart", action.payload);
  switch (action.type) {
    case "ADD_TO_CART": {
      const specificProduct = state.all.find((p) => {
        return p.productId === action.payload;
      });
      console.log("productFind", specificProduct);

      const allProductsMinusFind = state.all.filter((p) => {
        return p.productId !== action.payload;
      });

      if (!specificProduct) {
        return {
          ...state,
          all: [...state.all, { productId: action.payload, quantity: 1 }],
        };
      }
      const addProduct = {
        ...specificProduct,
        quantity: specificProduct.quantity + 1,
      };
      console.log("productToAdd", addProduct);
      return { ...state, all: [...allProductsMinusFind, addProduct] };
    }

    default: {
      return state;
    }
  }
}
