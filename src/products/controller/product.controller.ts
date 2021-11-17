import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { MessageDto } from 'src/model_helper/message.dto';
import { ProductDto } from '../dto/product.dto';
import { ProductService } from '../service/product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  create(@Body() product: ProductDto): Promise<ProductDto> {
    return this.productService.create(product);
  }

  @Get()
  async findAll(): Promise<ProductDto[]> {
    return this.productService.findAll();
  }

  @Put()
  update(@Body() product: ProductDto): Promise<ProductDto> {
    return this.productService.update(product);
  }

  @Delete()
  delete(@Body() product: ProductDto): Promise<MessageDto> {
    return this.productService.delete(product);
  }
}
