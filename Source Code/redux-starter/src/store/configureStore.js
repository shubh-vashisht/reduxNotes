// imports without dev tools
// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";

// before devReduxTools
// export default function configureStore() {
//   const store = createStore(reducer, devToolsEnhancer({ trace: true }));
//   return store;
// }

//import with reduxtDevTools
import { configureStore } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import func from "./middleware/func";
// import reducer from "./bugs";
import reducer from "./reducer";

// after reduxDevTools
export default function () {
  return configureStore({
    reducer,
    middleware: [logger, func],
  });
}
