import configureStore from "./store/configureStore.js";
import { projectAdded, projectRemoved } from "./store/projects.js";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
  getBugsForEmployee,
} from "./store/bugs.js";
const store = configureStore();
function add() {
  store.dispatch(projectAdded({ name: "project 2" }));
  store.dispatch(() => {
    store.dispatch(
      bugAdded({ description: "bahot ganda", employee: "bahote acha name" })
    );
  });
  // store.dispatch(bugAdded({ description: "bug 1", employee: "Shubh" }));
  // store.dispatch(bugAdded({ description: "bug 1", employee: "Dhruv" }));
  // store.dispatch(bugAdded({ description: "bug 1", employee: "Shubh" }));
  // store.dispatch(projectAdded({ name: "project 3" }));
}
const unsubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState());
});
add();
// const x = getUnresolvedBugs(store.getState());
// const y = getUnresolvedBugs(store.getState());
// console.log(x === y);
// console.log(getBugsForEmployee(store.getState(), "Shubh"));
// const resolve = (id) => {};
// setTimeout(() => {
//   resolve(1);
// }, 5000);
