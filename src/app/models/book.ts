export interface Book {
  id: string;
  volumeInfo: {
    authors: string[],
    categories: string[],
    imageLinks: {
      smallThumbnail: string,
      thumbnail: string
    },
    language: string,
    publishedDate: string,
    title: string,
    pageCount: number,
    description: string
  }
}

export type BookID = Book['id'];

