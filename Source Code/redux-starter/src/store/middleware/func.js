const func = (store) => (next) => (action) => {
  if (typeof action === "function") {
    const tempAction = action();
    next(tempAction);
  } else next(action);
};
export default func;
