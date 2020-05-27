import Component from '../base-component/Component'

export default class FooterComponent extends Component {

	static Html = 
    `<nav class="tabs is-fullwidth">
        <ul>
          <li>
              <a>                        
                  <span class="icon">
                    <i class="fas fa-book-reader"></i>
                  </span>
               Library
               </a>
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
    </nav>`

    constructor(parentID:string) {
        super(parentID,FooterComponent.Html)
    }

}