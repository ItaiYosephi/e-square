import {
  BooksDataService,
  BooksRequest,
} from './../../services/books-data.service';
import { GoogleApiResponse } from '../../models/google-api-response';
import { Injectable } from '@angular/core';
import { PaginationResponse } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { Book } from './../../models/book';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private booksDataService: BooksDataService) {}

  get(req: BooksRequest): Observable<PaginationResponse<Book>> {
    return this.booksDataService
      .getBooks(req)
      .pipe(map((res) => this.mapToPaginationResponse(res, req)));
  }

  private mapToPaginationResponse(
    { items, totalItems }: GoogleApiResponse,
    { page, pageSize }: BooksRequest
  ): PaginationResponse<Book> {
    return {
      data: items || [],
      currentPage: page,
      lastPage: totalItems / pageSize,
      perPage: pageSize,
      total: totalItems,
    };
  }
}
