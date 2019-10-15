export const environment = {
  production: true,
  _apiUrl: 'http://tripbay-backend.herokuapp.com/api',
  get apiUrl() {
    return this._apiUrl;
  }
};
