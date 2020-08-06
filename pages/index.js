import Head from 'next/head'
import Header from '../components/header'
import Education from '../components/education'
import Work from '../components/work'
import Project from '../components/project'
import Interests from '../components/interests'
import Skills from '../components/skills'
import Languages from '../components/languages'
import Achievements from '../components/achievements'
import Contact from '../components/contact'
import About from '../components/about'
import Data from '../data.json';

export default function Home() {
  return(
    <div className="root">
		<Head>
			<title>Ali Nazari</title>
		</Head>
		<div className="my-layout">
			<Header />
			<div className="boxes">
			<div className="left-side">
				<About data={Data.about} />
				<Work data={Data.work} />
				<Project data={Data.project} />
			</div>
			<div className="right-side">
				<Education data={Data.education} />
				<Contact data={Data.contact} />
				<Skills data={Data.skills} />
				<Interests data={Data.interests} />
				<Achievements data={Data.achievements} />
				<Languages data={Data.languages} />
			</div>
			</div>
			<h5 className="footer">Made with love by <a href="https://github.com/AliNazariii">&nbsp;Ali Nazari</a></h5>
      </div>
    </div>
  )
}