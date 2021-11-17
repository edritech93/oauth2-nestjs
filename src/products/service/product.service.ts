import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from '../dto/product.dto';
import { Repository } from 'typeorm';
import { ProductEntity } from '../entity/product.entity';
import { MessageDto } from 'src/model_helper/message.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  create(product: ProductDto): Promise<ProductDto> {
    return this.productRepository.save(product);
  }

  findAll(): Promise<ProductDto[]> {
    return this.productRepository.find();
  }

  update(product: ProductDto): Promise<ProductDto> {
    return this.productRepository.save({
      id: product.id,
      name: product.name,
    });
  }

  async delete(product: ProductDto): Promise<MessageDto> {
    await this.productRepository.remove(product);
    const result = new MessageDto();
    result.message = 'Produk Berhasil Dihapus';
    return result;
  }
}
