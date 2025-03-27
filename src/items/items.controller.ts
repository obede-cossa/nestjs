import { 
    Controller, 
    Get, 
    Post, 
    Body, 
    Param, 
    Put, 
    Delete, 
    HttpCode, 
    HttpStatus,
    NotFoundException
  } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.entity';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    findAll(): Item[] {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Item {
        const item =  this.itemsService.findOne(id);
        if (!item) {
          throw new NotFoundException('Item not found');
        }
        return item;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() item: Omit<Item, 'id' | 'createdAt'>): Item {
      return this.itemsService.create(item);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatedData: Partial<Item>): Item {
      const updatedItem =  this.itemsService.update(id, updatedData);
        if (!updatedItem) {
            throw new NotFoundException('Item not found');
        }
        return updatedItem;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: string): void {
      const deleted:boolean = this.itemsService.delete(id);
        if (!deleted) {
            throw new NotFoundException('Item not found');
        }
    }
}
