import React from 'react';
import { createRoot } from 'react-dom/client';
import { Menu, X, ArrowRight, Cpu, BatteryCharging, Sun, Gauge, Mail, ExternalLink, ShieldCheck, Wrench, GraduationCap, Users, MapPin, Download, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles/index.css';
import { brand, contacts, photos, sponsorLogos, stats, subteams, sponsorshipTiers, internshipTracks } from './data/siteData';

const nav = ['Home','About','Join','Outreach','Internships','Sponsors','Contact'];
const fade = { initial:{opacity:0,y:24}, whileInView:{opacity:1,y:0}, viewport:{once:true, margin:'-80px'}, transition:{duration:.55} };

function Button({href, children, variant='primary'}) {
  return (
    <a href={href} className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${variant==='primary'?'bg-gold text-black hover:bg-white':'border border-white/20 bg-white/5 hover:border-gold hover:text-gold'}`}>
      {children}
      <ArrowRight size={16}/>
    </a>
  );
}

function Section({id, eyebrow, title, children}) {
  return (
    <section id={id} className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fade}>
          <p className="mb-3 text-xs font-black uppercase tracking-[.35em] text-gold">{eyebrow}</p>
          <h2 className="max-w-4xl text-3xl font-black tracking-tight sm:text-5xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function Card({children, className=''}) {
  return <div className={`glass rounded-3xl p-6 ${className}`}>{children}</div>;
}

function Header() {
  const [open,setOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#Home" className="flex items-center gap-3">
          <img src="/assets/solar-devils-logo.png" className="h-10 w-10 rounded-full"/>
          <span className="font-black tracking-wide">Solar Devils <span className="text-gold">@ ASU</span></span>
        </a>

        <nav className="hidden gap-6 lg:flex">
          {nav.map(n => <a key={n} href={`#${n}`} className="text-sm text-white/70 hover:text-gold">{n}</a>)}
        </nav>

        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <X/> : <Menu/>}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-4 py-4 lg:hidden">
          {nav.map(n => <a onClick={() => setOpen(false)} className="block py-3" href={`#${n}`} key={n}>{n}</a>)}
        </div>
      )}
    </header>
  );
}

function SolarCarVisual() {
  return (
    <div className="relative mx-auto aspect-[1.7] max-w-3xl overflow-hidden rounded-[2rem] border border-gold/20 bg-black p-6 shadow-glow">
      <div className="absolute inset-0 grid-bg opacity-70"/>
      <svg viewBox="0 0 700 420" className="relative z-10 h-full w-full">
        <path className="route" d="M70 330 C170 220 270 370 360 220 S520 110 630 210" fill="none" stroke="#FFC627" strokeWidth="3" opacity=".45"/>
        <path d="M110 260 C170 130 530 110 610 260 L560 310 L170 310 Z" fill="#8C1D40" stroke="#FFC627" strokeWidth="5"/>
        <path d="M185 210 H535" stroke="#FFC627" strokeWidth="36" strokeLinecap="round" opacity=".95"/>
        <circle cx="230" cy="310" r="38" fill="#050505" stroke="#fff" opacity=".9"/>
        <circle cx="500" cy="310" r="38" fill="#050505" stroke="#fff" opacity=".9"/>
        <g opacity=".55">{[190,240,290,340,390,440,490].map(x => <rect key={x} x={x} y="194" width="34" height="22" rx="3" fill="#050505"/>)}</g>
        <text x="120" y="90" fill="#FFC627" fontSize="22" fontWeight="900">SOV // ASC 2028</text>
        <text x="470" y="372" fill="#fff" fontSize="15">Mechanical • Electrical • Aerodynamics</text>
      </svg>
      <div className="scan absolute inset-0"/>
    </div>
  );
}

function Home() {
  return (
    <>
      <section id="Home" className="relative min-h-screen overflow-hidden px-4 pt-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 grid-bg opacity-50"/>
        <div className="absolute right-[-10%] top-16 h-96 w-96 rounded-full bg-maroon/40 blur-3xl"/>
        <div className="absolute left-[-10%] bottom-0 h-80 w-80 rounded-full bg-gold/20 blur-3xl"/>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_.95fr]">
          <motion.div {...fade}>
            <p className="mb-4 text-xs font-black uppercase tracking-[.35em] text-gold">Arizona State University Solar Car Team</p>
            <h1 className="text-5xl font-black leading-[.95] tracking-tight sm:text-7xl">Engineering the next generation of solar mobility.</h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70">Solar Devils @ ASU is a student-led team designing and building a solar-powered vehicle for the 2028 American Solar Challenge while developing engineers, builders, leaders, and STEM advocates.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#Contact">Contact the team</Button>
              <Button href="#Sponsors" variant="secondary">Sponsor the build</Button>
            </div>
          </motion.div>

          <motion.div {...fade}>
            <SolarCarVisual/>
          </motion.div>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([a,b]) => <Card key={a}><div className="text-3xl font-black text-gold">{a}</div><div className="mt-2 text-sm text-white/65">{b}</div></Card>)}
        </div>
      </section>

      <Section id="Overview" eyebrow="Technical overview" title="A complete student-built vehicle system.">
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[[Sun,'Solar Array','Energy capture, array packaging, charging strategy, and race-day solar management.'],[BatteryCharging,'Battery Systems','Accumulator design, protection, testing, and reliability for endurance competition.'],[Gauge,'Vehicle Dynamics','Chassis, suspension, brakes, steering, ergonomics, and roadworthiness.'],[Cpu,'Controls + Telemetry','Embedded systems, diagnostics, data logging, and cross-subteam integration.']].map(([Icon,t,d]) => (
            <Card key={t}>
              <Icon className="text-gold"/>
              <h3 className="mt-4 text-xl font-black">{t}</h3>
              <p className="mt-3 text-sm text-white/65">{d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="Pathways" eyebrow="Get involved" title="Join, host, intern, or sponsor.">
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['Join','#Join','ASU students can contribute through engineering, business, outreach, operations, and media roles.'],
            ['Outreach','#Outreach','Bring solar car engineering into classrooms, fairs, and community STEM events.'],
            ['Internships','#Internships','High school students can learn by supporting real solar car build work.'],
            ['Sponsors','#Sponsors','Companies can support fabrication, testing, travel, materials, and mentorship.']
          ].map(([t,h,d]) => (
            <Card key={t} className="group">
              <h3 className="text-2xl font-black group-hover:text-gold">{t}</h3>
              <p className="mt-3 text-white/65">{d}</p>
              <Button href={h} variant="secondary">Explore</Button>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

function About() {
  return (
    <Section id="About" eyebrow="About" title="Student-led engineering with professional standards.">
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <Card>
          <h3 className="text-2xl font-black text-gold">Mission</h3>
          <p className="mt-4 text-white/70">Solar Devils develops students through hands-on design, manufacturing, systems integration, project leadership, and sponsor collaboration. The team turns classroom theory into a competition-ready solar vehicle.</p>

          <h3 className="mt-8 text-2xl font-black text-gold">Competition Goal</h3>
          <p className="mt-4 text-white/70">The current build targets the 2028 American Solar Challenge in the Single Occupant Vehicle category, requiring energy strategy, endurance, safety compliance, and rigorous scrutineering.</p>
        </Card>

        <Card>
          <h3 className="text-2xl font-black text-gold">Vehicle Breakdown</h3>
          <div className="mt-5 grid gap-4">
            {subteams.map(([t,d]) => (
              <div key={t} className="rounded-2xl border border-white/10 p-4">
                <b>{t}</b>
                <p className="mt-1 text-sm text-white/60">{d}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {photos.slice(0,3).map(p => <img key={p} src={p} className="h-64 w-full rounded-3xl object-cover"/> )}
      </div>
    </Section>
  );
}

function Join() {
  return (
    <Section id="Join" eyebrow="ASU student membership" title="Build the car. Build the organization.">
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <p className="text-white/70">Membership is open to ASU students who want serious project experience. Engineering majors can work on mechanical, aero, electrical, manufacturing, and testing. Non-engineering members can lead sponsorship, finance, marketing, photography, events, logistics, and outreach.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {subteams.map(([t,d]) => (
              <div className="solar-panel rounded-2xl p-5" key={t}>
                <h3 className="font-black text-gold">{t}</h3>
                <p className="mt-2 text-sm text-white/65">{d}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-xl font-black">Expectations</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>Attend team meetings and subteam work sessions.</li>
            <li>Document work clearly for future builders.</li>
            <li>Communicate blockers early.</li>
            <li>Respect shop safety and training requirements.</li>
            <li>Contribute consistently during build and competition preparation.</li>
          </ul>
          <Button href="#Contact">Ask about joining</Button>
        </Card>
      </div>
    </Section>
  );
}

function Outreach() {
  return (
    <Section id="Outreach" eyebrow="STEM outreach" title="Solar racing as a classroom and community platform.">
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="grid gap-5">
          {[
            ['School visits',GraduationCap],
            ['STEM demos',Sparkles],
            ['Innovation fairs',Users],
            ['Community events',MapPin]
          ].map(([t,Icon]) => (
            <Card key={t}>
              <Icon className="text-gold"/>
              <h3 className="mt-3 text-xl font-black">{t}</h3>
              <p className="mt-2 text-white/65">Interactive sessions can cover solar energy, vehicle design, batteries, aerodynamics, manufacturing, and student pathways into engineering.</p>
            </Card>
          ))}
        </div>

        <div className="sticky top-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <img
              src="/assets/photos/outreach.jpeg"
              alt="Solar Devils Outreach"
              className="h-[850px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-gold">
                COMMUNITY IMPACT
              </p>

              <h3 className="mt-2 text-3xl font-black">
                Inspiring the next generation of engineers.
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-black/50 p-4 backdrop-blur">
                  <div className="text-3xl font-black text-gold">1000+</div>
                  <div className="text-sm text-white/60">Students Reached</div>
                </div>

                <div className="rounded-2xl bg-black/50 p-4 backdrop-blur">
                  <div className="text-3xl font-black text-gold">5+</div>
                  <div className="text-sm text-white/60">Community Events</div>
                </div>

                <div className="rounded-2xl bg-black/50 p-4 backdrop-blur">
                  <div className="text-3xl font-black text-gold">4+</div>
                  <div className="text-sm text-white/60">School Visits</div>
                </div>
              </div>

              <div className="mt-6">
                <Button href="#Contact">Request Outreach</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Internships() {
  return (
    <Section id="Internships" eyebrow="High school internship program" title="A build-focused internship for future engineers and technical leaders.">
      <div className="mt-10 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <Card>
          <p className="text-white/70">The Solar Devils High School Internship Program gives motivated high school students structured exposure to real solar car development. Interns assist ASU students with supervised build, design, research, documentation, testing support, outreach, and sponsor-facing work.</p>
          <h3 className="mt-8 font-black text-gold">Who it is for</h3>
          <p className="mt-2 text-sm text-white/65">Students interested in engineering, clean energy, manufacturing, business, STEM communication, or hands-on project work.</p>
          <h3 className="mt-6 font-black text-gold">Time commitment</h3>
          <p className="mt-2 text-sm text-white/65">Typical commitment is one recurring weekly work session plus optional build days and outreach events. Final schedule should be confirmed each semester.</p>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          {internshipTracks.map(t => (
            <Card key={t}>
              <h3 className="font-black">{t}</h3>
              <p className="mt-2 text-sm text-white/60">Learn fundamentals, support active tasks, document findings, and present progress to student mentors.</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card>
          <h3 className="text-xl font-black">Example projects</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/65">
            <li>CAD part modeling</li>
            <li>Solar energy research</li>
            <li>Composite layup prep</li>
            <li>Electrical diagram review</li>
            <li>Outreach demo materials</li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-black">Eligibility</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/65">
            <li>High school student</li>
            <li>Parent or guardian approval</li>
            <li>Reliable transportation</li>
            <li>Professional communication</li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-black">Parents and teachers</h3>
          <p className="mt-3 text-sm text-white/65">Interns work under ASU student leadership with defined scopes, shop safety boundaries, and supervision. The program is intended to supplement classroom learning, not replace formal instruction.</p>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <ShieldCheck className="text-gold"/>
          <h3 className="mt-3 text-xl font-black">Safety and supervision</h3>
          <p className="mt-2 text-sm text-white/65">Intern tasks are assigned according to experience, training, and supervision availability. Shop, fabrication, electrical, and testing activities require explicit approval and safety instruction.</p>
        </Card>

        <Card>
          <h3 className="text-xl font-black">FAQ</h3>
          <p className="mt-3 text-sm text-white/65"><b>Do interns need engineering experience?</b> No. Curiosity, reliability, and willingness to learn matter more.</p>
          <p className="mt-3 text-sm text-white/65"><b>Can interns work on business or outreach?</b> Yes. Sponsorship, media, and STEM communication are part of the program.</p>
          <Button href="#Contact">Ask about internship applications</Button>
        </Card>
      </div>
    </Section>
  );
}

function Sponsors() {
  return (
    <Section id="Sponsors" eyebrow="Corporate partnership" title="Sponsor the build, the students, and the STEM impact.">
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <p className="text-white/70">Sponsorships help fund solar car manufacturing, battery and electrical systems, materials and composites, STEM outreach, competition travel, tools, testing, and fabrication. Partners receive visibility, updates, engagement opportunities, and access to talented students.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {['Manufacturing','Electrical','Composites','Outreach','Travel','Testing'].map(x => <div className="rounded-2xl border border-gold/20 p-4 text-sm font-bold" key={x}>{x}</div>)}
          </div>
        </Card>

        <Card>
          <h3 className="text-xl font-black">Sponsor contact</h3>
          <p className="mt-3 text-white/65">Andrew Lee<br/>Vice President of External Affairs</p>
          <a className="mt-4 block text-gold" href="mailto:ajlee44@asu.edu">ajlee44@asu.edu</a>
          <Button href="/assets/documents/sponsorship-packet-2025-26.pdf"><Download size={16}/>Download packet</Button>
        </Card>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sponsorshipTiers.map(t => (
          <Card key={t.name}>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-gold">{t.name}</h3>
              <span className="text-sm font-bold">{t.range}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              {t.benefits.map(b => <li key={b}>• {b}</li>)}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-2xl font-black">Current sponsors</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sponsorLogos.map(s => (
            <div key={s.name} className="flex h-32 items-center justify-center rounded-3xl border border-white/10 bg-white p-5">
              <img src={s.file} alt={s.name} className="max-h-20 max-w-full"/>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <Wrench className="text-gold"/>
          <h3 className="mt-3 text-xl font-black">In-kind donations</h3>
          <p className="mt-2 text-white/65">Materials, tooling, machining, composites, electrical components, batteries, shop support, printing, transportation, and fabrication services can be valued at fair market value for sponsorship recognition.</p>
        </Card>

        <Card>
          <Users className="text-gold"/>
          <h3 className="mt-3 text-xl font-black">Corporate mentorship</h3>
          <p className="mt-2 text-white/65">Mentors can support design reviews, manufacturing planning, project management systems, technical documentation, testing readiness, and career exposure.</p>
        </Card>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="Contact" eyebrow="Contact" title="Start the right conversation.">
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_.9fr]">
        <Card>
          <form action="mailto:solardevilsasu@gmail.com" method="post" encType="text/plain" className="grid gap-4">
            <input className="rounded-2xl border border-white/10 bg-black/50 p-4" name="name" placeholder="Name"/>
            <input className="rounded-2xl border border-white/10 bg-black/50 p-4" name="email" placeholder="Email"/>
            <select className="rounded-2xl border border-white/10 bg-black/50 p-4" name="inquiry">
              <option>General inquiry</option>
              <option>Sponsorship inquiry</option>
              <option>Join inquiry</option>
              <option>Outreach request</option>
              <option>Internship question</option>
            </select>
            <textarea className="min-h-40 rounded-2xl border border-white/10 bg-black/50 p-4" name="message" placeholder="Message"/>
            <button className="rounded-full bg-gold px-5 py-3 font-black text-black" type="submit">Open email draft</button>
          </form>
          <p className="mt-4 text-xs text-white/45"></p>
        </Card>

        <div className="grid gap-4">
          {contacts.map(c => (
            <Card key={c.email}>
              <h3 className="font-black">{c.name}</h3>
              <p className="text-sm text-gold">{c.role}</p>
              <a className="mt-2 block text-sm text-white/70" href={`mailto:${c.email}`}>{c.email}</a>
              {c.phone && <p className="text-sm text-white/55">{c.phone}</p>}
            </Card>
          ))}

          <Card>
            <Mail className="text-gold"/>
            <a className="mt-3 block" href={`mailto:${brand.email}`}>{brand.email}</a>
            <a className="mt-2 inline-flex items-center gap-2 text-white/65" href={brand.linkedin}>LinkedIn <ExternalLink size={14}/></a>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/50 md:flex-row">
        <p>© {new Date().getFullYear()} Solar Devils @ ASU.</p>
        <p>Built by Triumvirate Public Relations LLC</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Join/>
        <Outreach/>
        <Internships/>
        <Sponsors/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App/>);
