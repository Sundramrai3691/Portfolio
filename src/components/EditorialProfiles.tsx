import { CERTIFICATIONS } from "@/data";
import { SectionHeader } from "./SectionHeader";

export const Profiles = () => <section id="profiles" className="profiles-section section-frame">
  <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-16">
    <SectionHeader eyebrow="CONTINUED LEARNING" title="Foundations, made practical." description="Focused coursework alongside building and shipping." />
    <div className="certification-ledger">
      <div><p className="systems-lens">SELECTED COURSEWORK</p><h3>Small studies, useful foundations.</h3></div>
      <ul>{CERTIFICATIONS.map((certification, index) => <li key={certification}><span>0{index + 1}</span>{certification}</li>)}</ul>
    </div>
  </div>
</section>;
