import { ArrowUpRight, Phone, ShoppingBasket } from 'lucide-react'

export function SiteHeader() {
  return (
    <header>
      <div className="wrap bar">
        <a className="brand" href="/" aria-label="Fill the Caddy home">
          <span className="mark" aria-hidden="true">
            <ShoppingBasket size={25} />
          </span>
          <span className="wordmark">fill the caddy</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#categories">Find essentials</a>
          <a href="#ride">Get a ride</a>
          <a href="#guide">SNAP guide</a>
        </nav>
        <a className="helpline" href="tel:211">
          <Phone size={15} /> Call 211
        </a>
      </div>
    </header>
  )
}

export function SupportInfo() {
  return (
    <section className="wrap more">
      <article id="guide">
        <span className="kicker">KNOW YOUR BENEFITS</span>
        <h2>What does SNAP cover?</h2>
        <p>
          SNAP helps pay for eligible groceries. It doesn’t cover nonfood items like soap,
          diapers, paper products, or pet food.
        </p>
        <a href="https://www.fns.usda.gov/snap/eligible-food-items">
          Read the official USDA guide <ArrowUpRight size={16} />
        </a>
      </article>
      <article id="about">
        <span className="kicker">ABOUT THIS GUIDE</span>
        <h2>A starting point for support</h2>
        <p>
          Fill the Caddy connects you with organizations that help with everyday essentials.
          Availability and eligibility vary by provider. Call ahead before visiting.
        </p>
        <a href="https://www.211.org/">
          Connect with your local 211 <ArrowUpRight size={16} />
        </a>
      </article>
    </section>
  )
}
