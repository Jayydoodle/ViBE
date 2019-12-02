import { logging } from 'protractor';
import { NumberValueAccessor } from '@angular/forms';

export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    location: { 
        longitude: number; 
        latitude: number;
    };
}