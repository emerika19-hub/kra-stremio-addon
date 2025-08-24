const { addonBuilder } = require("stremio-addon-sdk");

const manifest = {
  id: "org.kra.webshare",
  version: "1.0.0",
  name: "KRA Webshare Addon",
  description: "Streamování z Webshare.cz pro Stremio",
  resources: ["stream"],
  types: ["movie", "series"],
  idPrefixes: ["tt"]
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler((args) => {
  return Promise.resolve({ streams: [] }); // Zatím prázdné
});

module.exports = builder.getInterface();
