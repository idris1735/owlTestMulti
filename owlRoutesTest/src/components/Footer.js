import { Component, tags } from '@odoo/owl'

const FOOTER_TEMPLATE = tags.xml/*xml*/ `
<footer>
<div class="footer-wrapper align-items-center justify-content-between flex-row d-flex">
<div class="left-wrapper mx-5">- 2020 Riskgratis Technology. Made in Lagos </div>

<div class="right-wrapper mx-5">
<span class="followText">Follow us</span>
<div class="d-flex flex-row">
<div>
<a href="#"> <i class="icons insta bi bi-instagram"></i></a>
</div>
<div>
<a href="#"><i class="icons tweet bi bi-twitter"></i></a>
</div>
<div>
<a href="#"><i class="icons facebk bi bi-facebook"></i></a>
</div>
<div>
<a href="#"><i class="icons whatsup bi bi-whatsapp"></i></a>
</div>
</div>
</div>
</div>
</footer>
`
export class Footer extends Component {
  static template = FOOTER_TEMPLATE
}
