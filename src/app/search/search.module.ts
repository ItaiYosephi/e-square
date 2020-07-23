import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from './../shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { SearchRoutingModule } from './search.routing-module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
})
export class SearchModule {}
