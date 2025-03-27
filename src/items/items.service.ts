import { Injectable } from '@nestjs/common';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
    private items: Item[] = [];

    findAll(): Item[] {
        return this.items;
    }

    findOne(id: string): Item|undefined {
        return this.items.find(item => item.id === id);
    }

    create(item: Omit<Item, 'id' | 'createdAt'>): Item {
        const newItem = new Item();
        Object.assign(newItem, item);
        this.items.push(newItem);
        return newItem;
    }

    update(id: string, updatedItem: Partial<Item>): Item|null {
        const item = this.findOne(id);
        if (!item) return null;
        
        Object.assign(item, updatedItem);
        return item;
      }

      delete(id: string): boolean {
        const initialLength = this.items.length;
        this.items = this.items.filter(item => item.id !== id);
        return this.items.length !== initialLength;
      }
}
