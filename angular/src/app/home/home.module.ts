import { AdminLayoutModule } from './../layouts/admin-layout/admin-layout.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ArticleComponent } from './article/article.component';
import { UploadImgComponent } from './article/upload-img/upload-img.component';

@NgModule({
  declarations: [HomeComponent, UploadImgComponent],
  imports: [SharedModule, HomeRoutingModule, AdminLayoutModule],
})
export class HomeModule {}
