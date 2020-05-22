"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerStatus {
    constructor(encodedData) {
        this.inactive = encodedData.includes("i");
        this.longInactive = encodedData.includes("I");
        this.vacation = encodedData.includes("v");
        this.administrator = encodedData.includes("a");
    }
    toString() {
        return [this.vacation && "v", this.longInactive && "I", this.inactive && "i", this.administrator && "a"]
            .filter(v => !!v)
            .join("");
    }
}
exports.PlayerStatus = PlayerStatus;
//# sourceMappingURL=status.js.map