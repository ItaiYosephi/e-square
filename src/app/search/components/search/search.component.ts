import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { PaginationResponse, PaginatorPlugin } from '@datorama/akita';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import {
  debounceTime,
  filter,
  startWith,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { Book } from './../../../models/book';
import { SEARCH_PAGINATOR } from './../../state/search-paginator';
import { SearchService } from './../../state/search.service';
import { SearchState } from './../../state/search.store';

export const PAGE_SIZE = 20;

@UntilDestroy()
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  books$: Observable<PaginationResponse<Book>>;
  isLoading$ = this.paginatorRef.isLoading$;

  searchTermCtrl: FormControl;

  constructor(
    @Inject(SEARCH_PAGINATOR)
    private paginatorRef: PaginatorPlugin<SearchState>,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.initSearchTermCtrl();
    this.initPaginator();
    this.subscribeToSearchTerm();
  }

  onPageChange(ev: PageEvent): void {
    this.paginatorRef.setPage(ev.pageIndex + 1);
  }

  private initSearchTermCtrl(): void {
    this.searchTermCtrl = new FormControl(
      this.paginatorRef.metadata.get('searchTerm') || ''
    );
  }

  private initPaginator(): void {
    const searchTerm$ = this.searchTermCtrl.valueChanges.pipe(
      startWith(this.searchTermCtrl.value)
    );

    this.books$ = this.paginatorRef.pageChanges.pipe(
      withLatestFrom(searchTerm$),
      filter(([page, searchTerm]) => searchTerm),
      switchMap(([page, searchTerm]) => {
        const requestFn = () =>
          this.searchService.get({ page, searchTerm, pageSize: PAGE_SIZE });
        this.paginatorRef.metadata.set('searchTerm', searchTerm);
        return this.paginatorRef.getPage(requestFn);
      })
    );
  }

  private subscribeToSearchTerm(): void {
    this.searchTermCtrl.valueChanges
      .pipe(untilDestroyed(this), debounceTime(400))
      .subscribe(() => {
        this.paginatorRef.clearCache();
        this.paginatorRef.setFirstPage();
      });
  }
}
