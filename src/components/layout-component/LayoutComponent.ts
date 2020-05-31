import { LitElement, html, customElement } from 'lit-element'
import '../header-component/HeaderComponent'
import '../content-component/ContentComponent'
import '../footer-component/FooterComponent'

@customElement('layout-component')
export class LayoutComponent extends LitElement {
	render() {
		return html`
			<section class="hero is-fullheight">
				<div class="hero-head">
					<header-component></header-component>
				</div>

				<div class="hero-body">
					<content-component></content-component>
				</div>
				<div class="hero-foot">
					<footer-component></footer-component>
				</div>
			</section>
		`
	}

	createRenderRoot() {
		return this
	}
}
