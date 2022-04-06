export interface FlightData {
    id: number;
    attitude: number;
    captain: string;
    flightNumber: string;
}

export const data: FlightData = {
    id: 1,
    attitude: 10000,
    captain: 'Captain Guy',
    flightNumber: 'BNYC-1'
};
