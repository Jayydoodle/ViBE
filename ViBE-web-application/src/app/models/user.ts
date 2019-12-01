import { logging } from 'protractor';
import { NumberValueAccessor } from '@angular/forms';

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    location: { longitude: number; 
                latitude: number;};
    token: string;
}