export default class User {
	
	name: string;
	email: string

	constructor(name:string) {
		this.name = name
	}

	public get Name(): string {
		return this.name
	}

	public set Name(name:string) {
		this.name = name
	}

	public get Email(): string {
		return this.email
	}

	public set Email(email:string) {
		this.email = email
	}


}