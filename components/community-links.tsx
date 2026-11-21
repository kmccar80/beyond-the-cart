import { ArrowUpRight } from 'lucide-react'

export function CommunityLinks({ zip }: { zip?: string }) {
  const searchMap = (terms: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${terms} near ${zip}, USA`)}`
  const links = [
    ...(zip ? [
      ['Search Maps for church outreach programs', searchMap('church outreach pantry')],
      ['Search Maps for nonprofit supply pantries', searchMap('nonprofit hygiene pantry')],
    ] : []),
    ['Catholic Charities local agency finder', 'https://www.catholiccharitiesusa.org/about-us/find-a-local-agency/'],
    ['National Diaper Bank Network member directory', 'https://nationaldiaperbanknetwork.org/member-directory/'],
  ]
  return <><section className="result" aria-label="Churches and local nonprofits">
    <span className="kicker">COMMUNITY SUPPORT</span>
    <h3 className="mt-2">Churches and local nonprofits</h3>
    <p>{zip ? `Explore community groups near ${zip}, or use the organization directories below.` : 'Use these directories to find a local agency, or search by ZIP code for nearby church outreach programs and nonprofit pantries.'} Call before visiting to ask what supplies they offer, who qualifies, and whether pickup or delivery is available.</p>
    <ul className="grid gap-3">{links.map(([label, href]) => <li key={label}><a href={href} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight size={15}/><span className="sr-only"> (opens in a new tab)</span></a></li>)}</ul>
  </section>
  <section className="result" aria-label="Support for older adults and caregivers">
    <span className="kicker">AGING SERVICES</span>
    <h3 className="mt-2">Support for older adults and caregivers</h3>
    <p><strong>Start with your Area Agency on Aging.</strong> Give the Eldercare Locator {zip ? `ZIP code ${zip}` : 'your ZIP code'} and ask which agency serves your home. Ask about help getting household supplies, rides for errands, or support for a caregiver.</p>
    <div className="flex flex-wrap gap-4"><a href="tel:+18006771116">Call 1-800-677-1116</a><a href="https://eldercare.acl.gov/" target="_blank" rel="noopener noreferrer">Visit the Eldercare Locator <ArrowUpRight size={15}/><span className="sr-only"> (opens in a new tab)</span></a></div>
    <p><strong>Can’t get out for meals?</strong> Some Meals on Wheels providers also offer pet food or rides. Ask your local provider about eligibility, cost, and waiting lists.</p>
    <a href="https://www.mealsonwheelsamerica.org/find-meals" target="_blank" rel="noopener noreferrer">Find a local Meals on Wheels provider <ArrowUpRight size={15}/><span className="sr-only"> (opens in a new tab)</span></a>
  </section></>
}
