import Component from '../base-component/Component'

export default class HeaderComponent extends Component {
  static Logo = 'logo.png';
  static Html = `
		<header class="navbar is-tranparent is-fixed-top">
			<div class="navbar-brand">
				<a class="navbar-item">
					<img 
					src="logo.png">
				<span style="padding-left:1rem" class="subtitle">
					simplex:complex:multiplex
				</span>
				</a>
			</header>`


  constructor(parentID: string) {
    super(parentID, HeaderComponent.Html)
  }
}