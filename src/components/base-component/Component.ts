export default class Component {

	parentComponent: HTMLElement

	public constructor(parentID:string,html:string) {
		this.parentComponent = document.querySelector(parentID)
		this.parentComponent.innerHTML = html	
	}


}