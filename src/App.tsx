import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import PixelField from './components/PixelField'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import { education, experience } from './data/content'

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <a
        href="#main"
        className="absolute -left-[999px] top-2 z-[100] rounded-lg bg-pale px-4 py-2.5 font-ui font-bold text-bg focus:left-3"
      >
        Skip to content
      </a>
      <PixelField />
      <Header />
      <main id="main" className="relative z-[1]">
        <Hero />
        <Projects />
        <Timeline
          id="experience"
          title="Experience"
          intro="A team placement building real software, and event customer service where I learned to stay calm under pressure."
          entries={experience}
        />
        <Timeline
          id="education"
          title="Education"
          intro="A software-focused degree, plus courses and an exchange seminar that went beyond it."
          entries={education}
        />
        <Skills />
      </main>
      <Contact />
    </div>
  )
}
