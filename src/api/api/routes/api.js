module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/services',
      handler: 'api.serviceController',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
