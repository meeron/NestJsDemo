import { Injectable } from '@nestjs/common';
import { Product, ProductRequest } from './products.interfaces';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  getAll(): Promise<Product[]> {
    return new Promise((resolve) => {
      resolve(this.products);
    });
  }

  getById(id: number): Promise<Product> {
    const product = this.products.find(p => p.id === id);

    return new Promise((resolve) => resolve(product));
  }

  addProduct(request: ProductRequest): Promise<Product> {
    const newProduct: Product = {
      id: Date.now(),
      name: request.name,
    };

    this.products.push(newProduct);

    return new Promise((resolve) => {
      resolve(newProduct);
    });
  }
}