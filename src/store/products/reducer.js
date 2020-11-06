const initialState = {
  all: [],
};

export default function productsReducer(state = initialState, action) {
  // console.log("PAYLOAD PRODUCTS:", action.payload);

  switch (action.type) {
    case "ADD_PRODUCTS": {
      return { ...state, all: [...state.all, ...action.payload] };
    }

    default: {
      return state;
    }
  }
}
