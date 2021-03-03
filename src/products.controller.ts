import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { Product } from './product.model';

@Controller('products')
export class ProductsController {

    products: Product[] = [
        new Product("LIV01", "livro", 29.90),
        new Product("LIV02", "cd", 30),
        new Product("LIV03", "dvd", 50.50),
    ]

    @Get()
    getAll(): Product[] {
        return this.products;
    }

    @Get(':id')
    getById(@Param() params): Product {
        return this.products[0]; 
    }

    @Post()
    create(@Body() product: Product) {
        product.id = 100;
        this.products.push(product);
    }

    @Put()
    change(@Body() product): string {
        console.log(product)
        return 'produto  criado'
    }

    @Delete(':id')
    delete(@Param() params): string {
        return `apagado ${params.id}`;
    }

}