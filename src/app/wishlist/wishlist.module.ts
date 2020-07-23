import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { WishlistRoutingModule } from './wishlist.routing-module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [WishlistComponent],
  imports: [CommonModule, WishlistRoutingModule, SharedModule, MatCardModule],
})
export class WishlistModule {}
