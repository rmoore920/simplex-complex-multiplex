import Component from '../base-component/Component'

export default class ContentComponent extends Component {
  static Html = `
				<div class="container">
					<div class="columns is-vcentered">
						<div class="column">
							<h1 class="title">
								simplex:complex:multiplex
							</h1>
						</div>
						<div class="column">
							<p>
							“Perhaps I can explain it in purely metaphorical terms, though painfully I know that thou wilt not understand until thou hast seen for thyself. Stop and look above.”</br>
							They paused in the broken stone and looked up.</br>
							“See the holes?” she asked.</br>
							In the plating that floored the bridge, here and there were pinpricks of light.</br>
							“They just look like random dots, do they not?”</br>
							He nodded.</br>
							“That’s the simplex view. Now start walking and keep looking.”</br>
							Comet started to walk, steadily, staring upward. The dots of light winked out, and here and there others appeared, then winked out again, and more, or perhaps the original ones, returned.</br>
							“There’s a superstructure of girders above the bridge that gets in the way of some of the holes and keeps thee from perceiving all at once. But thou art now receiving the complex view, for thou art aware that there is more than what is seen from any one spot. Now, start to run, and keep thy head up.”</br>
							Jo began to run along the rocks. The rate of flickering increased, and suddenly he realized that the holes were in a pattern, six-pointed stars crossed by diagonals of seven holes each. It was only with the flickering coming so fast that the entire pattern could be perceived...</br>
							He stumbled, and skidded onto his hands and knees.</br>
							“Didst thou see the pattern?”</br>
							“Eh . . . yeah.” Jo shook his head. His palms stung through the gloves, and one knee was raw.</br>
							“That was the multiplex view.”
							</p></br>
							<p class="is-italic">Delany, Samuel R. Empire Star. New York: Ace Books, Inc., 1966.</p>
						</div>
					</div>
				</div>`

  constructor(parentID: string) {
    super(parentID, ContentComponent.Html)
  }
}