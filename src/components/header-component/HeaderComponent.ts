import { LitElement, html, customElement } from 'lit-element'

@customElement('header-component')
export class HeaderComponent extends LitElement {
	render() {
		return html`
			<header class="navbar is-tranparent is-fixed-top">
				<div class="navbar-brand">
					<a class="navbar-item" href="#home">
						<img src="logo.png" />
						<span style="padding-left:1rem" class="subtitle">
							simplex:complex:multiplex
						</span>
					</a>
				</div>
			</header>
		`
	}

	createRenderRoot() {
		return this
	}
}
