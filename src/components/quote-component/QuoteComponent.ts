import { LitElement, html, customElement, property } from 'lit-element'

@customElement('quote-component')
export class QuoteComponent extends LitElement {
	readonly quote = html` <p>This is a quote</p> `
	@property({ type: String }) content = 'home'

	constructor() {
		super()
	}

	render() {
		return html`
			<div>
				${this.quote}
			</div>
		`
	}

	createRenderRoot() {
		return this
	}
}
