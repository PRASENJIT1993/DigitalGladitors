
let appContext = null;
export const setAppContext = (context) => {
  appContext = context;
};

export const navigateTo = (path) => {
  appContext.props.router.push(path);
};

export const goBack = () => {
  appContext.props.router.goBack();
};
