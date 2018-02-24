export interface IfDetails {
    id: string,
    fare:string,
    flightName: string,
    flightNum: string,
    from: string,
    to: string,
    departureTime: string,
    arrivalTime: string,
    date: string
}

export interface IfDetailsHeader {
    from: string,
    to:string,
    dateInput: string
}
