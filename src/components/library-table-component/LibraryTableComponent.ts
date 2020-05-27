import Component from '../base-component/Component'
import Book from '../../models/Book'

export default class LibraryTableComponent extends Component {

  private books: Array<Book>
  static Html =
    `<table class="table is-fullwidth is-striped is-hoverable">
    <thead>
    <tr>
    <th>Title</th>
    <th>Author</th>
    </tr>
    </thead>
    <tbody id="library-table-body">
    </tbody>
    </table>`

  public constructor(parentID: string) {
    super(parentID, LibraryTableComponent.Html)
  }

  public set Books(books: Array<Book>) {
    this.books = books
    let html = ""
    this.books.forEach(book => {
      html +=
        `<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        </tr>`
    })
    let tableBody = document.querySelector('#library-table-body') as HTMLElement
    tableBody.innerHTML = html
  }
}