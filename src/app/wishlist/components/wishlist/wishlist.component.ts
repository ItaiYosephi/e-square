import { Component, OnInit } from '@angular/core';
import { WishlistQuery } from './../../state/wishlist.query';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  books$ = this.wishlistQuery.selectAll();
  constructor(private wishlistQuery: WishlistQuery) {}

  ngOnInit(): void {}
}
