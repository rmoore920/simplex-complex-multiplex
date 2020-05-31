import { LitElement, html, customElement, property } from 'lit-element'
import { router } from 'lit-element-router'
import '../layout-component/LayoutComponent'
import './AppMainComponent'
// import './AppLinkComponent'

@customElement('my-app')
export class AppComponent extends LitElement {
	constructor() {
		super()
	}

	render() {
		return html`
			<!-- <app-link href="/">Home</app-link>
			<app-link href="/info">Info</app-link>
			<app-link href="/info?data=12345">Info?data=12345</app-link>
			<app-link href="/user/14">user/14</app-link> -->
			<layout-component></layout-component>
			<!-- <app-main active-route="">
				<h1 route="home">Home</h1>
				<h1 route="info">Info</h1>
				<h1 route="user">User</h1>
				<h1 route="not-found">Not Found</h1>
			</app-main> -->
		`
	}

	createRenderRoot() {
		return this
	}
}
