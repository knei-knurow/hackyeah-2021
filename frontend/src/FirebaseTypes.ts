export enum DeviceType {
    Accelerometer = "Accelerometer",
    Mouse = "Mouse",
}

export interface Device {
    code: string
    name: string
    type: DeviceType
    description: string
}