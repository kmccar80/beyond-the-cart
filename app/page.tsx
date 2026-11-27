import { ResourceFinder } from '@/components/resource-finder'
import { SiteHeader, SupportInfo } from '@/components/site-chrome'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <ResourceFinder />
        <SupportInfo />
      </main>
      <footer className="wrap">
        <span className="footer-brand">fill the caddy</span>
        <span>Independent community essentials guide</span>
      </footer>
    </>
  )
}
