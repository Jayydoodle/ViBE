

export class Event {
    id: number;
    title: string;
    category: string;
    description: string;
    location: {
        longitude: number; 
        latitude: number;
    };
}