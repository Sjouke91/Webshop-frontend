export const selectUserName = (state) => {
  if (!state.auth.user) {
    return;
  }
  // const firstName = state.auth.user.firstName,
  // const lastName = state.auth.user.lastName
  // const fullName = firstName, lastName

  return state.auth.user.firstName;
};

export const selectToken = (state) => {
  return state.auth.accessToken;
};
