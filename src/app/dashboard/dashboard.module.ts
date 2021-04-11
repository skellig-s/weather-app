import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CityListComponent } from './city-list/city-list.component';
import { RouterModule } from '@angular/router';
import { CityCardComponent } from './city-card/city-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    CityListComponent,
    CityCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DashboardModule {
}
