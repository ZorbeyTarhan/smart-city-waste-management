import { SmartBin } from '../src/SmartBin';

describe('SmartBin', () => {
    it('should initialize with 0 fill level', () => {
        const bin = new SmartBin('Location A');
        expect(bin.getFillLevel()).toBe(0);
    });

    it('should update fill level correctly', () => {
        const bin = new SmartBin('Location B');
        bin.updateFillLevel(50);
        expect(bin.getFillLevel()).toBe(50);
    });

    it('should return correct location', () => {
        const bin = new SmartBin('Location C');
        expect(bin.getLocation()).toBe('Location C');
    });
});