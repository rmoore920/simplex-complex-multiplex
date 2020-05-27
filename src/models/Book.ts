export default class Book {
	
	title: string
	author: string

	constructor(title:string,author:string) {
		this.title = title
		this.author = author
	}


	public get Title(): string {
		return this.title
	}

	public set Title(title:string) {
		this.title = title
	}

	public get Author(): string {
		return this.author
	}

	public set Author(author:string) {
		this.author = author
	}

}