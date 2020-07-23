import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailsDialogComponent } from './dialogs/book-details-dialog/book-details-dialog.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';

const DIRECTIVES = [AutofocusDirective];
const COMPONENTS = [SpinnerComponent, BookListComponent, BookItemComponent];
const DIALOGS = [BookDetailsDialogComponent];

@NgModule({
  declarations: [...DIRECTIVES, ...COMPONENTS, ...DIALOGS],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  exports: [...DIRECTIVES, ...COMPONENTS, ...DIALOGS],
  entryComponents: [...DIALOGS],
})
export class SharedModule {}
