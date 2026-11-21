import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { CommunityLinks } from '@/components/community-links'
import { ZipSearch } from '@/components/zip-search'
import { PickupGuide } from '@/components/pickup-guide'
import { localCenters } from '@/lib/local-centers'

export const metadata = { title: 'Local resource search | Beyond the Cart', robots: { index: false } }

export default async function Resources({ searchParams }: { searchParams: Promise<{ zip?: string | string[] }> }) {
  const { zip: value } = await searchParams
  const zip = typeof value === 'string' ? value.trim() : ''
  const valid = /^\d{5}$/.test(zip)
  const centers = valid ? await localCenters(zip) : []
  return <main className="wrap directory max-w-3xl">
    <Link className="cardlink mb-8" href="/"><ArrowLeft size={16}/> Beyond the Cart</Link>
    <div className="kicker block">LOCAL RESOURCE SEARCH</div>
    <h1 className="text-4xl!">{valid ? `Resources for ${zip}` : 'Find your local resources'}</h1>
    <ZipSearch zip={valid ? zip : ''}/>
    {!valid ? <p className="intro">Enter a five-digit U.S. ZIP code, including any leading zero.</p> : <>
      <p className="intro">Your local 211 referral center can help you find programs for diapers, hygiene products, household supplies, pet food, or transportation. Call ahead to confirm availability.</p>
      {centers?.length ? centers.map((center, index) => <article className="result" key={`${center.name}-${index}`}>
        <span className="kicker">LOCAL REFERRAL CENTER · 211.ORG</span>
        <h2 className="mt-2 text-2xl">{center.name}</h2>
        <div className="mt-4 flex flex-wrap gap-5"><a href={`tel:${center.phone || '211'}`}>Call {center.phone || '211'}</a>{center.website && <a href={center.website} target="_blank" rel="noopener noreferrer">Visit local directory <ArrowUpRight size={16}/><span className="sr-only"> (opens in a new tab)</span></a>}</div>
      </article>) : <article className="result"><h2 className="text-2xl">{centers === null ? 'The local directory could not be reached' : 'No referral center found for this ZIP code'}</h2><p>{centers === null ? 'Try your search again or call 211 directly.' : 'Check your ZIP code or call 211 for help finding nearby programs.'}</p><a href="tel:211">Call 211</a></article>}
    </>}
    <CommunityLinks zip={valid ? zip : undefined}/>
    <PickupGuide/><Link className="cardlink mt-6" href="/#categories">Browse national resources by category <ArrowUpRight size={16}/></Link>
  </main>
}
