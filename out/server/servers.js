"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ifetch = require("isomorphic-fetch");
const xml_1 = require("../xml");
async function getServers() {
    const endpoint = "https://lobby.ogame.gameforge.com/api/servers";
    const result = await ifetch(endpoint).then(v => v.json());
    for (const server of result) {
        xml_1.boolean(server, ["prefered", "serverClosed", "signupClosed"]);
        server.opened = new Date(server.opened).valueOf();
        server.startDate = new Date(server.startDate).valueOf();
        server.settings.aks = !!server.settings.aks;
    }
    return result;
}
exports.getServers = getServers;
//# sourceMappingURL=servers.js.map