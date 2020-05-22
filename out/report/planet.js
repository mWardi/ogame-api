"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseReport = (encodedData) => {
    const props = new Map();
    const [rawCoords, ...pairedProps] = encodedData.split("|");
    const coords = rawCoords.substr(7);
    for (const pairedProp of pairedProps) {
        const [key, value] = pairedProp.split(";");
        props.set(key, Number.parseInt(value));
    }
    return [coords, props];
};
//# sourceMappingURL=planet.js.map