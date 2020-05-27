import Book from '../models/Book';

export default class LibraryController {

	async get() {
		const response = await fetch("./data/books.json");
		const json = await response.json();
		return  json.books as Array<Book>;
	}
}