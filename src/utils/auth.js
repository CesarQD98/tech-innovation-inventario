// This represents some generic auth provider API!

const fakeAuthProvider = {
  isAuthenticated: false,
  signin() {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(100); // fake async
  },
  signout() {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(100); // fake async
  },
};

export { fakeAuthProvider }