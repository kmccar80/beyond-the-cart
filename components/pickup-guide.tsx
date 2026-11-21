export function PickupGuide() {
  return (
    <details className="taxguide mt-5">
      <summary>Need a ride, delivery, or help picking up supplies?</summary>
      <p>Options vary by ZIP code. Before making plans, confirm the cost, who can use the service, and how far ahead you need to book.</p>
      <ul className="list-disc pl-5">
        <li><strong>If you don’t have a car:</strong> <a href="tel:211">Call 211</a> or <a href="https://www.211.org/about-us/your-local-211">find your local 211</a>. Ask: “Is there a free round-trip ride or bus pass to pick up supplies? This isn’t a medical appointment.” If a child is coming, ask about car seats.</li>
        <li><strong>For older adults and caregivers:</strong> Call or text the <a href="https://eldercare.acl.gov/">Eldercare Locator</a> at <a href="tel:+18006771116">1-800-677-1116</a>. Ask for your Area Agency on Aging and whether a volunteer driver or errand service can help.</li>
        <li><strong>If you can’t leave home:</strong> Call the pantry or supply bank and ask: “Do you deliver to my ZIP code? If not, can someone pick up for me? What permission or ID should they bring?”</li>
      </ul>
    </details>
  )
}
