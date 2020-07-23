import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleApiResponse } from '../models/google-api-response';

const API_KEY = `AIzaSyBA3nDLHpc9rvbfsqx8CVBV59GVRP1hSJ0`;

export interface BooksRequest {
  searchTerm: string;
  page: number;
  pageSize: number;
}

@Injectable({ providedIn: 'root' })
export class BooksDataService {
  private baseUrl = `https://www.googleapis.com/books/v1/volumes`;
  constructor(private http: HttpClient) {}

  getBooks(req: BooksRequest): Observable<GoogleApiResponse> {
    return this.http.get<GoogleApiResponse>(this.baseUrl, {
      params: this.getParams(req),
    });
  }

  private getParams(req: BooksRequest) {
    return new HttpParams({
      fromObject: {
        key: API_KEY,
        q: req.searchTerm,
        maxResults: req.pageSize.toString(),
        startIndex: ((req.page - 1) * req.pageSize).toString(),
      },
    });
  }
}
