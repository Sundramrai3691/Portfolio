import { ArrowUpRight } from "lucide-react";
import { CERTIFICATIONS } from "@/data";
import { CODING_PROFILES } from "@/data/codingProfiles";
import { SectionHeader } from "./SectionHeader";

export const Profiles = () => <section id="profiles" className="profiles-section section-frame">
  <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-16">
    <SectionHeader eyebrow="Open practice" title="Find the work in the wild." description="Public coding profiles, project activity, and focused learning records. Each link opens the original platform." />
    <div className="profile-ledger">
      {CODING_PROFILES.map((profile, index) => <a key={profile.platform} className="profile-entry" href={profile.url} target="_blank" rel="noreferrer">
        <span className="profile-index">0{index + 1}</span>
        <span className="profile-platform">{profile.platform}</span>
        <span className="profile-handle">{profile.handle}</span>
        <span className="profile-proof">{"rating" in profile ? <><data value={profile.rating}>{profile.rating}</data><small>{profile.badge}</small></> : <small>{profile.platform === "GitHub" ? "Projects & contributions" : "Problem solving profile"}</small>}</span>
        <ArrowUpRight className="profile-arrow" size={19} aria-hidden="true" />
      </a>)}
    </div>
    <div className="certification-ledger">
      <div><p className="systems-lens">CONTINUED LEARNING</p><h3>Foundations, made practical.</h3><p>Focused coursework alongside building and shipping.</p></div>
      <ul>{CERTIFICATIONS.map((certification, index) => <li key={certification}><span>0{index + 1}</span>{certification}</li>)}</ul>
    </div>
  </div>
</section>;
