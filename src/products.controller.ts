import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { Product } from './product.model';
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {

    }

    @Get()
    async getAll(): Promise<Product[]> {
        return this.productsService.getAll();
    }

    @Get(':id')
    async getById(@Param() params): Promise<Product> {
        return this.productsService.getById(params.id);
    }

    @Post()
    async create(@Body() product: Product) {
        product.id = 100;
        this.productsService.create(product);
    }

    @Put()
    async change(@Body() product): Promise<[number, Product[]]> {
        return this.productsService.patch(product);
    }

    @Delete(':id')
    async delete(@Param() params) {
        return this.productsService.delete(params.id);
    }

}