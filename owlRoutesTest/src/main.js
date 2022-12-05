import { App } from './App'
import { utils, router, mount, QWeb } from '@odoo/owl'
import {
  LogIn,
  Register,
  Home,
  About,
  Pricing,
  Service,
  Contact,
  Checkout,
} from './pages'

export const ROUTES = [
  { name: 'HOME', path: '/', component: Home },
  { name: 'LOGIN', path: '/login', component: LogIn },
  { name: 'REGISTER', path: '/register', component: Register },
  { name: 'PRICING', path: '/pricing', component: Pricing },
  { name: 'ABOUT', path: '/about', component: About },
  { name: 'SERVICES', path: '/services', component: Service },
  { name: 'CONTACT', path: '/contact', component: Contact },
  { name: 'CHECKOUT', path: '/checkout', component: Checkout },
]

async function makeEnvironment() {
  const env = { qweb: new QWeb() }
  env.router = new router.Router(env, ROUTES, { mode: 'hash' })
  await env.router.start()
  return env
}

async function setup() {
  App.env = await makeEnvironment()
  mount(App, { target: document.body })
}

utils.whenReady(setup)
