import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { AdminModule } from '@admin-bro/nestjs';
import { AdminBroOptions } from 'admin-bro';

const adminBroOptions: AdminBroOptions = {
  rootPath: '/admin',
  resources: [],
};
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-blog-project', {
      useNewUrlParser: true,
    }),
    BlogModule,
    AdminModule.createAdmin({
      adminBroOptions,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
