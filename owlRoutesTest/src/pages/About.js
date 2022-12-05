import { Component, tags } from '@odoo/owl'
const { xml } = tags

const ABOUT_TEMPLATE = xml/* xml */ `
   <section id="about" class="about section-bg">
               <div class="section-title">
                  <h2>About us</h2>
               </div>
        <div class="container">
          <div class="row">
            <div
              class="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <img src="https://images2.imgbox.com/65/07/elXIXNc4_o.jpg" class="img-fluid" alt="" />
            </div>
            <div
              class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right">
               <h1>Solving Real World Problems</h1>
               <br />
               <p style="font-size: 24px; font-weight: '600';">
               Riskgratis is a software solution provider based in Lagos, and has now been established for over ten years with one major goal to provide solutions that make your life easier.  We focus on implementing, creating, and supporting business management solutions for businesses of all sizes.
               </p>
               <br />
            </div>
          </div>
        </div>
      </section>
`
export class About extends Component {
  static template = ABOUT_TEMPLATE
}
