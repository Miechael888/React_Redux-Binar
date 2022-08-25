import { createStore } from "redux";

const authState = {
  data: {
    name: "miechael",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
};

// Function atau reducer terminal memasukan state ke dalam store
const authReducer = (state = authState) => {
  return state;
};

const store = createStore(authReducer);

export default store;
