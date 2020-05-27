import './styles.scss'
import './images/favicon.ico'
import './images/logo.png'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import LayoutComponent from './components/layout-component/LayoutComponent'
import RouterComponent from './components/router-component/RouterComponent'

let routerComponent = new RouterComponent()
let layoutComponent = new LayoutComponent('#app-layout')

// https://thirsty-mcclintock-a34e21.netlify.app/#confirmation_token=PgUStSFKJbtofMtULTxzJQ
// import LibraryController from './controllers/LibraryController'
// import LibraryView from './views/LibraryView'


// document.addEventListener('DOMContentLoaded', () => {

//   let elements = Array.from(document.querySelectorAll('.navbar-burger'))
//   for(let element of elements as Array<HTMLElement>) {
//     element.addEventListener('click', () => {
//         const target = element.dataset.target
//         const $target = document.getElementById(target)
//         element.classList.toggle('is-active')
//         $target.classList.toggle('is-active')
// 	})
//   }

// })





//https://mandrillapp.com/track/click/31128206/thirsty-mcclintock-a34e21.netlify.app?p=eyJzIjoiX0pMTnFJSDhpM2RScEVtdWlnZFZGTDZzaHNBIiwidiI6MSwicCI6IntcInVcIjozMTEyODIwNixcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL3RoaXJzdHktbWNjbGludG9jay1hMzRlMjEubmV0bGlmeS5hcHBcXFwvI2NvbmZpcm1hdGlvbl90b2tlbj1QZ1VTdFNGS0pidG9mTXRVTFR4ekpRXCIsXCJpZFwiOlwiZDdlMzJiMjlmMTU4NDdmZGI5MjEwYmM3NzQzZTZjNjFcIixcInVybF9pZHNcIjpbXCI4M2RjN2E3MzEwMTQzNjNlNGNhN2VmZGNhZDg5NTNiMzg0YjU4MzZiXCJdfSJ9