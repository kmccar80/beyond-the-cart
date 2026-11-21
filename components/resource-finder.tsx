'use client'
import { useRef, useState } from 'react'
import { ZipSearch } from './zip-search'
import { ArrowRight, ArrowUpRight, Compass, X, Search } from 'lucide-react'
import { CommunityLinks } from './community-links'
import { PickupGuide } from './pickup-guide'
import { HolidayGiving } from './holiday-giving'
import { categories } from '@/lib/resources'

export function ResourceFinder(){
 const [selected,setSelected]=useState<number|null>(null);const modal=useRef<HTMLDialogElement>(null)
 function open(index:number|null){setSelected(index);modal.current?.showModal()}
 return <><section className="hero"><div className="wrap herogrid"><div className="herocopy"><span className="eyebrow"><Compass size={15}/> COMMUNITY RESOURCE FINDER</span><h1>Find help beyond<br/>the grocery aisle.</h1><p>Discover free and low-cost resources for the everyday essentials your SNAP benefits don’t cover.</p><ZipSearch/></div><div className="heroart"><img src="/tote.webp" width="1100" height="738" alt="A green tote filled with toiletries beside folded towels and soap"/></div></div></section><HolidayGiving/><section className="wrap directory" id="categories"><span className="kicker"><i/>RESOURCE DIRECTORY</span><div className="sectionhead"><h2>Browse by category</h2><button onClick={()=>open(null)}>View all resources <ArrowRight size={16}/></button></div><div className="cards">{categories.map((c,i)=><button className={'category tone'+i} key={c.name} onClick={()=>open(i)}><img src={'/category-'+i+'.webp'} alt="" width="85" height="73"/><h3>{c.name}</h3><p>{c.description}</p><span className="cardlink">Explore resources <ArrowRight size={15}/></span></button>)}</div><PickupGuide/></section><dialog ref={modal} onClick={e=>{if(e.target===e.currentTarget)modal.current?.close()}} aria-labelledby="result-title"><div className="dialoginner"><button className="close" onClick={()=>modal.current?.close()} aria-label="Close resources"><X size={20}/></button><span className="kicker">RESOURCE DIRECTORY</span><h2 id="result-title">{selected!==null?categories[selected].name:'All resources'}</h2><PickupGuide/><p className="intro">Start with these directories. Contact each program to confirm supplies and eligibility.</p>{categories.map((c,i)=>(selected===null||selected===i)&&<article className="result" key={c.name}><span className="kicker">{c.name}</span><h3>{c.org}</h3><p>{c.detail}</p><a href={c.url}>Visit directory <ArrowUpRight size={16}/></a></article>)}{selected===null&&<CommunityLinks/>}{selected!==null&&<div className="localresult"><Search size={20}/><div><strong>Need more local options?</strong><p>Call 211 and ask about {categories[selected].name.toLowerCase()} in your area.</p><a href="tel:211">Call 211 <ArrowRight size={16}/></a></div></div>}</div></dialog></>
}
