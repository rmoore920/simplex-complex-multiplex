import { LitElement, html, css, customElement, property } from 'lit-element'
import { navigator } from 'lit-element-router'

@customElement('app-link')
class AppLinkComponent extends navigator(LitElement) {
	@property({ type: String }) href = ''

	constructor() {
		super()
	}

	render() {
		return html`
			<a href="${this.href}" @click="${this.linkClick}">
				<slot></slot>
			</a>
		`
	}

	linkClick(event: CustomEvent) {
		console.log(`HREF: ${this.href}`)
		event.preventDefault()
		this.navigate(this.href)
	}
}
