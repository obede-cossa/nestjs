import { isDate, isNotEmpty, IsOptional, isString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export class Item {

    @IsString()
    id: string;

    @isString()
    @isNotEmpty()
    name: string;

    @isString()
    @IsOptional()
    description?: string;

    @isDate()
    createdAt: Date;

    constructor() {
        this.id = uuidv4();
        this.createdAt = new Date();
    }
}