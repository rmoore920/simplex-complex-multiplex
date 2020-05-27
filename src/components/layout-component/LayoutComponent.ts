import HeaderComponent from '../header-component/HeaderComponent'
import ContentComponent from '../content-component/ContentComponent'
import FooterComponent from '../footer-component/FooterComponent'
import Component from '../base-component/Component'

export default class LayoutComponent extends Component {

    headerComponent: HeaderComponent
    contentComponent: ContentComponent
    footerComponent: FooterComponent

    static Html =
        `<section class="hero is-fullheight" id="layout">
        <div class="hero-head" id="layout-header">
        </div>
        <div class="hero-body" id="layout-content">
        </div>
        <div class="hero-foot" id="layout-footer">
        </div>
     </section>`

    constructor(parentID: string) {
        super(parentID, LayoutComponent.Html)
        this.headerComponent = new HeaderComponent('#layout-header')
        this.contentComponent = new ContentComponent('#layout-content')
        this.footerComponent = new FooterComponent('#layout-footer')
    }

}