import { AdminLayoutModule } from './../layouts/admin-layout/admin-layout.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule, AdminLayoutModule],
})
export class HomeModule {}
