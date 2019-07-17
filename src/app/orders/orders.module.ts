import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDatepickerModule,
  MatInputModule,
  MatTableModule,
  MatCardModule,
  MatIconModule,
  MatSortModule,
  MatCheckboxModule,
  MatPaginatorModule
} from '@angular/material';

import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    OrdersRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatTableModule,
    MatMomentDateModule,
    MatCardModule,
    MatSortModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule
  ]
})
export class OrdersModule {}
