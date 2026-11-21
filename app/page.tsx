import { SiteHeader, SupportInfo } from '@/components/site-chrome'
import { ResourceFinder } from '@/components/resource-finder'

export default function Page() {
  return <><SiteHeader/><main><ResourceFinder/><SupportInfo/></main><footer className="wrap">Beyond the Cart <span>Independent community resource guide</span></footer></>
}
