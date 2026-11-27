'use client'

import { useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, Compass, MapPin, Search, X } from 'lucide-react'
import { HolidayGiving } from './holiday-giving'
import { categories } from '@/lib/resources'

export function ResourceFinder() {
  const [zip, setZip] = useState('')
  const [selected, setSelected] = useState<number | null>(null)
  const [location, setLocation] = useState('')
  const modal = useRef<HTMLDialogElement>(null)

  function open(index: number | null, area = '') {
    setSelected(index)
    setLocation(area)
    modal.current?.showModal()
  }

  return (
    <>
      <section className="hero">
        <div className="wrap herogrid">
          <div className="herocopy">
            <span className="eyebrow">
              <Compass size={15} /> COMMUNITY ESSENTIALS FINDER
            </span>
            <h1>A little help to fill the caddy.</h1>
            <p>
              Find free and low-cost resources for the everyday essentials your SNAP benefits
              don’t cover.
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault()
                open(null, zip)
              }}
            >
              <div className="zip">
                <MapPin size={19} />
                <input
                  aria-label="5-digit ZIP code"
                  placeholder="Enter your ZIP code"
                  value={zip}
                  onChange={(event) => setZip(event.target.value)}
                  required
                  inputMode="numeric"
                  pattern="[0-9]{5}"
                  title="Enter a five-digit US ZIP code"
                  maxLength={5}
                  autoComplete="postal-code"
                />
              </div>
              <button className="primary">
                Find essentials <ArrowRight size={17} />
              </button>
            </form>
          </div>
          <div className="heroart">
            <span className="shape shape-star" aria-hidden="true" />
            <span className="shape shape-dot" aria-hidden="true" />
            <div className="art-frame">
              <img
                src="/tote.webp"
                width="1100"
                height="738"
                alt="A green tote filled with toiletries beside folded towels and soap"
              />
            </div>
            <span className="sticker-note">
              EVERYDAY HELP
              <strong>CLOSE TO HOME</strong>
            </span>
          </div>
        </div>
      </section>

      <HolidayGiving />

      <section className="wrap directory" id="categories">
        <span className="kicker"><i /> RESOURCE DIRECTORY</span>
        <div className="sectionhead">
          <h2>What can we help you find?</h2>
          <button onClick={() => open(null)}>
            View all essentials <ArrowRight size={16} />
          </button>
        </div>
        <div className="cards">
          {categories.map((category, index) => (
            <button
              className={`category tone${index}`}
              key={category.name}
              onClick={() => open(index)}
            >
              <img
                src={`/category-${index}.webp`}
                alt=""
                width="85"
                height="73"
              />
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <span className="cardlink">
                Explore resources <ArrowRight size={15} />
              </span>
            </button>
          ))}
        </div>
      </section>

      <dialog
        ref={modal}
        onClick={(event) => {
          if (event.target === event.currentTarget) modal.current?.close()
        }}
        aria-labelledby="result-title"
      >
        <div className="dialoginner">
          <button className="close" onClick={() => modal.current?.close()} aria-label="Close resources">
            <X size={20} />
          </button>
          <span className="kicker">RESOURCE DIRECTORY</span>
          <h2 id="result-title">
            {selected !== null
              ? categories[selected].name
              : location
                ? `Resources for ${location}`
                : 'All resources'}
          </h2>
          {location && (
            <div className="localresult">
              <MapPin size={22} />
              <div>
                <strong>Start with your local 211</strong>
                <p>
                  Ask for basic-needs programs near {location}, including supply closets,
                  diaper banks, and hygiene programs.
                </p>
                <a href="https://www.211.org/about-us/your-local-211">
                  Find your local 211 <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          )}
          {(selected !== null ? [categories[selected]] : categories).map((category) => (
            <article className="result" key={category.name}>
              <span className="kicker">{category.name}</span>
              <h3>{category.org}</h3>
              <p>{category.detail}</p>
              <a href={category.url}>
                Visit resource <ArrowUpRight size={15} />
              </a>
            </article>
          ))}
          {selected === null && !location && (
            <div className="localresult">
              <Search size={22} />
              <div>
                <strong>Looking for something else?</strong>
                <p>Call 211 and describe what you need. A specialist can search local programs.</p>
              </div>
            </div>
          )}
        </div>
      </dialog>
    </>
  )
}
