import { ArrowRight, MapPin } from 'lucide-react'

export function ZipSearch({ zip = '' }: { zip?: string }) {
  return <form action="/resources" method="get" role="search" aria-label="Search by ZIP code">
    <div className="zip"><MapPin size={19}/><input name="zip" aria-label="5-digit ZIP code" placeholder="Enter your ZIP code" defaultValue={zip} required inputMode="numeric" pattern="[0-9]{5}" title="Enter a five-digit US ZIP code" maxLength={5} autoComplete="postal-code"/></div>
    <button type="submit" className="primary">Find resources <ArrowRight size={17}/></button>
  </form>
}
