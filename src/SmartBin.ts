export class SmartBin {
    private fillLevel: number;
    private location: string;

    constructor(location: string) {
        this.fillLevel = 0;
        this.location = location;
    }

    public getFillLevel(): number {
        return this.fillLevel;
    }

    public updateFillLevel(level: number): void {
        this.fillLevel = level;
    }

    public getLocation(): string {
        return this.location;
    }
}