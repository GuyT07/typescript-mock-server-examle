export interface Flight {
    id: number;
    departure: string;
    destination: string;
    flightNumber: string;
}

export const data: Flight[] = [{
    id: 1,
    departure: 'Breda',
    destination: 'New York City',
    flightNumber: 'BNYC-1'
}, {
    id: 2,
    departure: 'Eindhoven',
    destination: 'Las Palmas',
    flightNumber: 'ELP-1'
}];
