export interface IAuthor {
    name: string;
}

export interface IBook {
    title: string;
    isbn: string;
    author: IAuthor;
}
