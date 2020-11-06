const initialState = {
  user: null, // the logged-in user
  accessToken: null,
};

export default function authReducer(state = initialState, action) {
  // console.log("PAYLOAD auth:", action.payload);

  switch (action.type) {
    case "USER_TOKEN":
      return {
        user: null,
        accessToken: action.payload.jwt,
      };

    case "USER_PROFILE":
      return { ...state, user: action.payload.profile };

    case "USER_LOGOUT":
      return {
        user: null,
        accessToken: null,
      };

    default: {
      return state;
    }
  }
}
