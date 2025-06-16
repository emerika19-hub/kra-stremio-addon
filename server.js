
const { addonBuilder } = require("stremio-addon-sdk");

const manifest = {
    id: "community.kra",
    version: "1.0.0",
    name: "kra.sk Addon",
    description: "Stremio addon for kra.sk with placeholder content",
    types: ["movie"],
    catalogs: [
        { type: "movie", id: "kra_recent", name: "Наскоро добавени" },
        { type: "movie", id: "kra_popular", name: "Най-търсени" }
    ],
    resources: ["catalog", "meta", "stream"],
    idPrefixes: ["kra:"]
};

const builder = new addonBuilder(manifest);

builder.defineCatalogHandler(args => {
    return Promise.resolve({
        metas: [
            { id: "kra:matrix", name: "The Matrix", type: "movie", poster: "", description: "Placeholder movie" },
            { id: "kra:inception", name: "Inception", type: "movie", poster: "", description: "Placeholder movie" }
        ]
    });
});

builder.defineMetaHandler(args => {
    return Promise.resolve({
        meta: {
            id: args.id,
            name: "kra.sk Movie",
            type: "movie",
            description: "Metadata placeholder for " + args.id,
            poster: "",
            background: ""
        }
    });
});

builder.defineStreamHandler(args => {
    return Promise.resolve({
        streams: [{
            title: "Test Stream",
            url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
        }]
    });
});

module.exports = builder.getInterface();
