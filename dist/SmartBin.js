"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartBin = void 0;
class SmartBin {
    constructor(location) {
        this.fillLevel = 0;
        this.location = location;
    }
    getFillLevel() {
        return this.fillLevel;
    }
    updateFillLevel(level) {
        this.fillLevel = level;
    }
    getLocation() {
        return this.location;
    }
}
exports.SmartBin = SmartBin;
