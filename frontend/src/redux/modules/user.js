// imports

// actions

// action creators

// initial state

const initialState = {
  isLoggedIn: localStorage.getItem("jwt") || false // localstorage에서 jwt가 있으면 가져옴
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// reducer functions

// exports

// reducer export

export default reducer;
