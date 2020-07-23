import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from './../../../models/book';
import { WishlistQuery } from './../../../wishlist/state/wishlist.query';
import { WishlistService } from './../../../wishlist/state/wishlist.service';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss'],
})
export class BookDetailsDialogComponent {
  isLoading$ = this.wishlistQuery.selectLoading();
  isWishlisted$ = this.wishlistQuery.selectIsWishlisted(this.book.id);
  constructor(
    public dialogRef: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public book: Book,
    private wishlistQuery: WishlistQuery,
    private wishlistService: WishlistService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  toggle(isWishlisted: boolean): void {
    if (isWishlisted) {
      this.removeFromWishlist();
    } else {
      this.addToWishlist();
    }
  }
  addToWishlist(): void {
    this.wishlistService.add(this.book).subscribe();
  }

  removeFromWishlist(): void {
    this.wishlistService.remove(this.book.id).subscribe();
  }
}
