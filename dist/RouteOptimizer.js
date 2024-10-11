"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SmartBin_1 = require("../src/SmartBin");
describe('SmartBin', () => {
    it('should initialize with 0 fill level', () => {
        const bin = new SmartBin_1.SmartBin('Location A');
        expect(bin.getFillLevel()).toBe(0);
    });
    it('should update fill level correctly', () => {
        const bin = new SmartBin_1.SmartBin('Location B');
        bin.updateFillLevel(50);
        expect(bin.getFillLevel()).toBe(50);
    });
    it('should return correct location', () => {
        const bin = new SmartBin_1.SmartBin('Location C');
        expect(bin.getLocation()).toBe('Location C');
    });
});
