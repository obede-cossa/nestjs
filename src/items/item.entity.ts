import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export class Item {

    @IsString()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsDate()
    createdAt: Date;

    constructor() {
        this.id = uuidv4();
        this.createdAt = new Date();
    }
}