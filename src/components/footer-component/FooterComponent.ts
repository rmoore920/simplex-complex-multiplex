import { LitElement, html, customElement } from 'lit-element'
import '../app-component/AppLinkComponent'

@customElement('footer-component')
export class FooterComponent extends LitElement {
	render() {
		return html`
			<nav class="tabs is-fullwidth">
				<ul>
					<li>
						<app-link href="/info">
							<span class="icon">
								<i class="fas fa-book-reader"></i>
							</span>
							Library
						</app-link>
					</li>
					<li>
						<a>
							<span class="icon">
								<i class="fas fa-project-diagram"></i>
							</span>
							Projects
						</a>
					</li>
					<li>
						<a>
							<span class="icon">
								<i class="fas fa-blog"></i>
							</span>
							Blog
						</a>
					</li>
					<li>
						<a>
							<span class="icon">
								<i class="fas fa-address-card"></i>
							</span>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		`
	}

	createRenderRoot() {
		return this
	}
}
