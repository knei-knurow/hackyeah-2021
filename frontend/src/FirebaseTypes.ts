export enum DeviceType {
    Accelerometer = "Accelerometer",
    Mouse = "Mouse",
}

export interface Device {
    id: string
    name: string
    type: DeviceType
    description: string
}