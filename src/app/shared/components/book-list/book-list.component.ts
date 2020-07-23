import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book, BookID } from './../../../models/book';
import { BookDetailsDialogComponent } from './../../dialogs/book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent {
  @Input() books: Book[];

  constructor(private dialog: MatDialog) {}

  openDialog(book: Book): void {
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: book,
    });
  }

  trackById(b: Book): BookID {
    return b.id;
  }
}
