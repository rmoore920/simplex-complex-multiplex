import User from '../../models/User'
import GoTrue from 'gotrue-js'

export default class ConfirmModalComponent {

  private parent: Element
  private confirmModal: Element
  private closeButton: Element
  private goTrue: GoTrue
  
  static Html =
    `<div class="modal" id="login-modal">
     <div class="modal-card">
     <header class="modal-card-head">
     <p class="modal-card-title">Confirm Knowistic Login</p>
     </header>
     <section class="modal-card-body">
     <div class="field">
     <p class="control has-text-centered" id="confirm-modal-message"></p>
     </div>
     </section>
     <footer class="modal-card-foot buttons is-centered">
     <button class="button is-success" id="confirm-modal-close-button">Close</button>
     </footer>
     </div>
     </div>`

  public constructor() {

    let template = document.createElement('template')
    template.innerHTML = ConfirmModalComponent.Html.trim()
    this.confirmModal = template.content.firstChild as Element

    this.parent = document.querySelector('html')
    this.parent.appendChild(this.confirmModal)

    this.closeButton = document.querySelector('#confirm-modal-close-button')
    this.closeButton.addEventListener("click", this.Close)

    this.goTrue = new GoTrue({
      APIUrl: "https://thirsty-mcclintock-a34e21.netlify.app/.netlify/identity",
      audience: "",
      setCookie: false
    })
  }

  public SetConfirmationToken = (token: string) => {
    this.goTrue.confirm(token).
    then( response => {
      console.log("Confirmation email sent", JSON.stringify({ response }));
      this.Show("Knowistic login confirmed")
    })
    .catch(error => {
      console.log(error);
      this.Show(`Knowistic login denied ${error}`)
    });
  }

  public Show = (message: string) => {
    this.confirmModal.classList.toggle('is-active')
    this.parent.classList.toggle('is-clipped')
    let confirmMessage = document.querySelector('#confirm-modal-message')
    confirmMessage.innerHTML = message
  }

  public Close = () => {
    this.confirmModal.classList.toggle('is-active')
    this.parent.classList.toggle('is-clipped')
  }

}