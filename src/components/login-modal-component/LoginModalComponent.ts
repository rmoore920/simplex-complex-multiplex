import User from '../../models/User'
import GoTrue from 'gotrue-js'

export default class LoginModalComponent {

  private parent: Element
  private loginModal: Element
  private okButton: Element
  private cancelButton: Element
  private goTrue: GoTrue

	static Html =
    `<div class="modal" id="login-modal">
     <div class="modal-card">
     <header class="modal-card-head">
     <p class="modal-card-title">Knowistic Login</p>
     </header>
     <section class="modal-card-body">
     <div class="field">
     <p class="control has-icons-left">
     <input class="input" type="email" placeholder="E-mail">
     <span class="icon is-small is-left">
     <i class="fas fa-envelope"></i>
     </span>
     </p>
     </div>
     </section>
     <footer class="modal-card-foot">
     <button class="button is-success" id="login-modal-ok-button">Ok</button>
     <button class="button" id="login-modal-cancel-button">Cancel</button>
     </footer>
     </div>
     </div>`

  public constructor() {

    let template = document.createElement('template')
    template.innerHTML = LoginModalComponent.Html.trim()
    this.loginModal = template.content.firstChild as Element

    let parentElement = document.querySelector('html')
    parentElement.appendChild(this.loginModal)

    this.okButton = document.querySelector('#login-modal-ok-button')
    this.okButton.addEventListener("click", this.Login)

    this.cancelButton = document.querySelector('#login-modal-cancel-button')
    this.cancelButton.addEventListener("click", this.Cancel)

    this.goTrue = new GoTrue({
      APIUrl: "https://thirsty-mcclintock-a34e21.netlify.app/.netlify/identity",
      audience: "",
      setCookie: false
    })
  }

  public Show = () => {
    this.loginModal.classList.toggle('is-active')
    let htmlElement = document.querySelector('html')
    htmlElement.classList.toggle('is-clipped')
  }

  public Cancel = () => {
    this.loginModal.classList.toggle('is-active')
    let htmlElement = document.querySelector('html')
    htmlElement.classList.toggle('is-clipped')
  }

  public Login = () => {
    this.loginModal.classList.toggle('is-active')
    let htmlElement = document.querySelector('html')
    htmlElement.classList.toggle('is-clipped')
    this.goTrue.login('rmoore920@pm.me', 'none').then(response => {
      console.log("Logged in")
    })
      .catch(error => console.log(`Login error: ${error}`))
  }

}