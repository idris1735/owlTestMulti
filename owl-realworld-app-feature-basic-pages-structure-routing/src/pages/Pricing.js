import { Component, tags, router, useState } from '@odoo/owl'
const { xml } = tags
const Link = router.Link
import { NavbarLink } from '../components/NavbarLink'

const PRICING_TEMPLATE = xml/* xml */ `
 <section id="pricing" class="pricing section-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Pricing</h2>
            <p>
              Here are the finest of options in our deals 
            </p>
          </div>

          <div class="row">
            <div
              class="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="box">
                <h3>Free</h3>
                <h4><sup>$</sup>0<span> / month</span></h4>
                <ul>
                  <li><t t-esc="state.Free.storage"/></li>
                  <li><t t-esc="state.Free.usersAmt"/></li>
                  <li><t t-esc="state.Free.mails"/> </li>
                  <li><t t-esc="state.Free.help"/></li>
                  <li><t t-esc="state.Free.security"/></li>
                </ul>
                <div class="btn-wrap">
                   <NavbarLink to="'CHECKOUT'" class="nav-link btn-buy">Buy Now</NavbarLink>
                </div>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 mt-4 mt-md-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="box featured">
                <h3>Business</h3>
                <h4><sup>$</sup>19<span> / month</span></h4>
                <ul>
                  <li><t t-esc="state.Business.storage"/></li>
                  <li><t t-esc="state.Business.usersAmt"/></li>
                  <li><t t-esc="state.Business.mails"/> </li>
                  <li><t t-esc="state.Business.help"/></li>
                  <li><t t-esc="state.Business.security"/></li>
                </ul>
                <div class="btn-wrap">
                                     <NavbarLink to="'CHECKOUT'" class="btn-buy">Buy Now</NavbarLink>
                </div>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="box">
                <h3>Developer</h3>
                <h4><sup>$</sup>29<span> / month</span></h4>
                <ul>
                  <li><t t-esc="state.Developer.storage"/></li>
                  <li><t t-esc="state.Developer.usersAmt"/></li>
                  <li><t t-esc="state.Developer.mails"/> </li>
                  <li><t t-esc="state.Developer.help"/></li>
                  <li><t t-esc="state.Developer.security"/></li>
                </ul>
                <div class="btn-wrap">
                                    <NavbarLink to="'CHECKOUT'" class="btn-buy">Buy Now</NavbarLink>
                </div>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="box">
                <span class="advanced">Advanced</span>
                <h3>Ultimate</h3>
                <h4><sup>$</sup>49<span> / month</span></h4>
                <ul>
                  <li><t t-esc="state.Ultimate.storage"/></li>
                  <li><t t-esc="state.Ultimate.usersAmt"/></li>
                  <li><t t-esc="state.Ultimate.mails"/> </li>
                  <li><t t-esc="state.Ultimate.help"/></li>
                  <li><t t-esc="state.Ultimate.security"/></li>
                </ul>
                <div class="btn-wrap">
                                    <NavbarLink to="'CHECKOUT'" class="btn-buy">Buy Now</NavbarLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
`

export class Pricing extends Component {
  static template = PRICING_TEMPLATE
  static components = { Link, NavbarLink }

  setup() {
    this.state = useState({
      Free: {
        storage: '400mb',
        usersAmt: '1 users limited',
        mails: '2 chances of email support',
        help: 'Help center access',
        security: 'Extra security',
      },
      Business: {
        storage: '10gb',
        usersAmt: '20 users limited',
        mails: '20 chances of email support',
        help: 'Help center access',
        security: 'Extra security',
      },
      Developer: {
        storage: '40gb',
        usersAmt: '50 users limited',
        mails: '60 chances of email support',
        help: 'Help center access',
        security: 'Extra security',
      },
      Ultimate: {
        storage: 'Unlimited',
        usersAmt: 'Unlimited users',
        mails: 'Unlimited chances of email support',
        help: 'Help center access',
        security: 'Extra security',
      },
    })
  }
}
