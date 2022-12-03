// This represents some generic auth provider API!

const fakeAuthProvider = {
  isAuthenticated: false,
  iniciaSesion(myCallBack) {
    fakeAuthProvider.isAuthenticated = true;
    myCallBack();
  },
  cierraSesion(myCallBack) {
    fakeAuthProvider.isAuthenticated = false;
    myCallBack();
  },
};

export { fakeAuthProvider }