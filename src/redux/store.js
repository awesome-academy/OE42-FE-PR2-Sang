const { createStore } = require("redux");
const { default: rootReducer } = require("./reducer/rootReducer");

const store = createStore(rootReducer)

export default store
