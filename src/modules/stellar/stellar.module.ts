import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StellarConfig } from '@/configuration/stellar.configuration';

import { ErrorMapper } from './application/mapper/error.mapper';
import { PRODUCT_ASSET_REPOSITORY } from './application/repository/product-asset.repository.interface';
import { STELLAR_TRANSACTION_REPOSITORY } from './application/repository/stellar-transaction.repository.interface';
import { STELLAR_REPOSITORY } from './application/repository/stellar.repository.interface';
import { StellarService } from './application/services/stellar.service';
import { ProductAssetSchema } from './infrastructure/persistence/product-asset.schema';
import { ProductAssetTypeormRepository } from './infrastructure/persistence/product-asset.typeorm.repository';
import { StellarTransactionSchema } from './infrastructure/persistence/stellar-transaction.schema';
import { StellarTransactionTypeormRepository } from './infrastructure/persistence/stellar-transaction.typeorm.repository';
import { StellarRepository } from './infrastructure/stellar.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([StellarTransactionSchema, ProductAssetSchema]),
  ],
  providers: [
    StellarConfig,
    StellarService,
    ErrorMapper,
    {
      provide: STELLAR_REPOSITORY,
      useClass: StellarRepository,
    },
    {
      provide: PRODUCT_ASSET_REPOSITORY,
      useClass: ProductAssetTypeormRepository,
    },
    {
      provide: STELLAR_TRANSACTION_REPOSITORY,
      useClass: StellarTransactionTypeormRepository,
    },
  ],
})
export class StellarModule {}
