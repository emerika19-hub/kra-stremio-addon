
const { addonBuilder } = require("stremio-addon-sdk");

const manifest = {
  id: "community.kra",
  version: "1.0.0",
  name: "kra.sk Addon",
  description: "kra.sk Stremio Addon",
  types: ["movie"],
  catalogs: [
    { type: "movie", id: "kra_recent", name: "Наскоро добавени" },
    { type: "movie", id: "kra_popular", name: "Най-търсени" }
  ],
  resources: ["catalog", "meta", "stream"],
  idPrefixes: ["kra:"]
};

const builder = new addonBuilder(manifest);

builder.defineCatalogHandler(() => {
  return Promise.resolve({
    metas: [
      { id: "kra:test1", name: "Test Movie 1", type: "movie" },
      { id: "kra:test2", name: "Test Movie 2", type: "movie" }
    ]
  });
});

builder.defineMetaHandler(args => {
  return Promise.resolve({
    meta: {
      id: args.id,
      name: "kra Movie",
      type: "movie",
      poster: "",
      description: "Description for " + args.id
    }
  });
});

builder.defineStreamHandler(args => {
  return Promise.resolve({
    streams: [
      {
        title: "Test Stream",
        url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
      }
    ]
  });
});

const interface = builder.getInterface();

module.exports = (req, res) => {
  interface.getRouter()(req, res, () => {});
};
