import { Card, Icon } from 'antd'
import Head from 'next/head'
import "../styles/index.scss"
import "antd/dist/antd.css";
import "../styles/index.css"

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

function Home() {
  return(
    <div className="root">
		<Head>
			<title>Ali Nazari</title>
		</Head>
		<div className="my-layout">
			<Header />
			<div className="boxes">
			<div className="left-side">
				<About />
				<Education />
				<Work />
				<Project />
			</div>
			<div className="right-side">
				<Contact />
				<Interests />
				<Skills />
				<Languages />
				<Achievements />
			</div>
			</div>
			<h5 className="footer">Made with love by <a href="https://github.com/AliNazariii">&nbsp;Ali Nazari</a></h5>
      </div>
    </div>
  )
}

export default Home
