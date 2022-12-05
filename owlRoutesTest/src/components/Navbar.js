import { Component, tags, router } from '@odoo/owl'
const Link = router.Link
import { NavbarLink } from './NavbarLink'

const NAVBAR_TEMPLATE = tags.xml/*xml*/ `
<nav class="navbar navbar-expand-lg sticky-top">
  <div class="container-fluid">
    <Link to="'HOME'" class="navbar-brand">RiskGratis <span id="RBP-text">RBP </span> </Link>
    <button class="custom-toggler navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <NavbarLink to="'HOME'" class="nav-link">Home</NavbarLink>
        </li>
        <li class="nav-item">
          <NavbarLink to="'ABOUT'" class="nav-link">About</NavbarLink>
        </li>
        <li class="nav-item">
          <NavbarLink to="'SERVICES'" class="nav-link">Services</NavbarLink>
        </li>
        <li class="nav-item">
          <NavbarLink to="'PRICING'" class="nav-link">Pricing</NavbarLink>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            For Fashion
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Coming soon ...</a></li>
            <li><a class="dropdown-item" href="#">Coming soon</a></li>
          </ul>
        </li>
        <li class="nav-item">
         <NavbarLink to="'CONTACT'" class="nav-link">Contact us</NavbarLink>
        </li>
        <li class="nav-item">
         <NavbarLink to="'LOGIN'" class="nav-link">Login</NavbarLink>
        </li>
        <li class="nav-item">
         <NavbarLink to="'REGISTER'" class="nav-link">Register</NavbarLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
`
export class Navbar extends Component {
  static template = NAVBAR_TEMPLATE
  static components = { Link, NavbarLink }
}
