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
    {
      method: 'GET',
      path: '/teams',
      handler: 'api.teamController',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
