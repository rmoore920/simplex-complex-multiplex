import * as queryString from 'query-string'
import ConfirmModal from '../confirm-model-component/ConfirmModalComponent'

export default class RouterComponent {

  public constructor() {

    window.onhashchange = () => {
      const parsedHash = queryString.parse(location.hash);
      console.log(parsedHash.confirmation_token);
      let confirmModal = new ConfirmModal()
      confirmModal.SetConfirmationToken(parsedHash.confirmation_token[0])
    }
  }


}