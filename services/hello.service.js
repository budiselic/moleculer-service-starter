module.exports = {
  name: 'hello',
  settings: {},
  dependencies: [],
  actions: {
    hello: {
      async handler() {
        return 'Hello Moleculer';
      },
    },
    welcome: {
      params: {
        name: 'string',
      },
      async handler(ctx) {
        return `Welcome, ${ctx.params.name}`;
      },
    },
  },
  events: {},
  methods: {},
  created() {},
  async started() {
    // Service started
  },
  async stopped() {
    // Service stopped
  },
};
