const initialState = {
  all: [{ productId: null, quantity: null }],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      return { ...state, all: [...state.all, action.payload] };
    }

    default: {
      return state;
    }
  }
}
