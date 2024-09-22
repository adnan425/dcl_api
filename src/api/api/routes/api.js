module.exports = {
  routes: [
    {
      method: "GET",
      path: "/hero",
      handler: "api.heroSectionController",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/working-process",
      handler: "api.workingStepsController",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/services",
      handler: "api.serviceController",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/teams",
      handler: "api.teamController",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/testimonials",
      handler: "api.testimonialsController",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/faqs",
      handler: "api.faqController",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
