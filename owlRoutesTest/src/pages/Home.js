import { Component, tags, useState } from '@odoo/owl'

const HOME_TEMPLATE = tags.xml/*xml*/ `
<section id="home" class="hero d-flex align-items-center">
      <div class="container-fluid" data-aos="fade-up">
        <div class="row justify-content-center">
          <div
            class="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center"
          >
            <h1>Shape the future of your business</h1>
            <h2>
             Our purpose is to search beyond customers' needs today to accelerate what's next and make a difference for others, our company and Africa.
            </h2>
            <div>
              <a href="#about" class="btn-get-started scrollto">Get Started</a>
            </div>
          </div>
          <div
            class=" img-container col-xl-4 col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <img
              src="https://images2.imgbox.com/b9/7b/deowIza5_o.png"
              class="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

`
export class Home extends Component {
  static template = HOME_TEMPLATE
}
