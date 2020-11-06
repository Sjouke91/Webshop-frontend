const initialState = {
  all: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const specificProduct = state.all.find((p) => {
        return p.productId === action.payload;
      });

      if (!specificProduct) {
        return {
          ...state,
          all: [...state.all, { productId: action.payload, quantity: 1 }],
        };
      }
      const allProductsMinusFind = state.all.filter((p) => {
        return p.productId !== action.payload;
      });
      const addProduct = {
        ...specificProduct,
        quantity: specificProduct.quantity + 1,
      };

      return { ...state, all: [...allProductsMinusFind, addProduct] };
    }

    case "REMOVE_FROM_CART": {
      const specificProduct = state.all.find((p) => {
        return p.productId === action.payload;
      });
      console.log("productFind", specificProduct);

      const allProductsMinusFind = state.all.filter((p) => {
        return p.productId !== action.payload;
      });

      if (specificProduct.quantity === 1) {
        return {
          ...state,
          all: allProductsMinusFind,
        };
      }

      const removeProduct = {
        ...specificProduct,
        quantity: specificProduct.quantity - 1,
      };
      console.log("removeProduct", removeProduct);
      return { ...state, all: [...allProductsMinusFind, removeProduct] };
    }

    default: {
      return state;
    }
  }
}
