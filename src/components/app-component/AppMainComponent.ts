import { LitElement, html, customElement } from 'lit-element'
import { outlet } from 'lit-element-router'

@customElement('app-main')
export class AppMainComponent extends outlet(LitElement) {
	render() {
		return html` <slot></slot> `
	}
}
