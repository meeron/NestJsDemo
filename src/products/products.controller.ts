import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product, ProductRequest } from './products.interfaces';

@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Get()
  async getAll(): Promise<Product[]> {
    return await this.service.getAll();
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<Product> {
    return await this.service.getById(parseInt(id));
  }

  @Post()
  async add(@Body() request: ProductRequest): Promise<Product> {
    return await this.service.addProduct(request);
  }
}