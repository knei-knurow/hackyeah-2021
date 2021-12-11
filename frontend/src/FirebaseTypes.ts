import type { Timestamp } from "firebase/firestore"

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

export interface Log {
    deviceId: string
    timestamp: Timestamp
}