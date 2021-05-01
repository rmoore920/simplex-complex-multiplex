import { LitElement } from 'lit-element'
import Navigo from 'navigo'

interface IComponentLoader {
	component: string
	title: string
	lazyModule?: boolean
}

export class Router {
	router: Navigo
	root = `${location.protocol}//${location.host}`
	useHash = false
	hash = '#'

	constructor() {
		console.log(`Routing ${this.root}`)
		this.router = new Navigo(this.root, this.useHash, this.hash)

		this.router.notFound(() => {
			console.log('Route not found')
		})

		this.router
			.on({
				'/#info': () => {
					console.log('Info route')
					this.appendComponent('quote-component')
				},
				'#home': () => {
					console.log('home route')
					this.router.navigate('/')
				},
			})
			.on(() => {
				console.log('default route')
				this.router.navigate('/')
			})
			.resolve()
	}

	appendComponent = (component: string) => {
		console.log('Updating route')
		document.querySelector(
			'content-component#quote-content'
		).innerHTML = `<${component}></${component}>`
	}

	// appendComponent = ((selector) => ({ component, params, query }) => {
	// 	document.querySelector(selector).innerHTML = `<${component}></${component}>`
	// })('main#view')
}
