import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { ProductModule } from './products/product.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, ProductModule],
})
export class AppModule {}
