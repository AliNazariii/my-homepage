import { Card, Icon, Tag } from 'antd'
import "../styles/index.scss"
import "antd/dist/antd.css";
import "../styles/index.css"

function Project() {
    return(
      <Card className="card">
        <h2 className="card-title">Projects</h2>
        <div className="card-paragraph">
          	<div className="card-item">
				<Icon className="card-item" type="code" theme="filled" /> <b><a href="https://ali-nazari.ir/">My Homepage</a></b> (Winter 2019) &emsp;
				<br /> I designed and implemented this website as a homepage for myself in my free time.
				<br /> <a href="https://github.com/AliNazariii/my-homepage">Here</a> you can see the repository of this project.
				<br />
				<Tag>React</Tag>
				<Tag>Next.JS</Tag>
				<Tag>Typescript</Tag>
				<Tag>Ant Design</Tag>
				<Tag>SASS</Tag>
				<Tag>CSS</Tag>
			</div>
			<div className="card-item">
				<Icon className="card-item" type="code" theme="filled" /> <b><a href="https://icpc.aut.ac.ir/">AUT ICPC Website</a></b> (Summer 2019)
				<br /> I started the front-end of this project with <a href="https://www.linkedin.com/in/keshavarz13/">MohamadAli Keshavarz</a>.
				<br /> <a href="https://github.com/aut-icpc/ACM-frontend">Here</a> is some more information about our development process.
				<br />
				<Tag>React</Tag>
				<Tag>Material-UI</Tag>
				<Tag>CSS</Tag>
				<Tag>Team-Work</Tag>
			</div>
			<div className="card-item">
				<Icon className="card-item" type="code" theme="filled" /> <b><a href="https://github.com/AliNazariii/Elevator">Elevator</a></b> (Autumn 2018)
				<br /> It was the final project of our Logical Circuit course at AUT. 
				<br />First, we think as a group to design an efficient FSM (finite state machine) for movement and also the management of the elevator.
				<br /> <a href="https://github.com/AliNazariii/Elevator">Here</a> is some more information about it.
				<br />
				<Tag>Verilog</Tag>
				<Tag>FSM</Tag>
			</div>
			<div className="card-item">
				<Icon className="card-item" type="code" theme="filled" /> <b><a href="https://github.com/AliNazariii/progviz">ProGViz</a></b> (Summer 2018)
				<br /> First I should say that this project was failed but I have done my tasks as a client-side developer whose task was to develop a web-based application. I developed it just by HTML and CSS and in the end, I create a desktop application by integrating Electron.JS.
				<br /> ProGViz is a cross-platform graph-visualization desktop-application for visualizing well-known graphical representations of computer program source code such as CFGs, PDGs, ASTs, etc.
				<br /> It was an internal project by a group of students of Amirkabir University of Technology, as a sub-project of the Ph.D. thesis of <a href="http://linkedin.com/in/smghaffarian">Seyed Mohammad Ghaffarian</a>. 
				<br /> <a href="https://github.com/AliNazariii/progviz">Here</a> is some more information about our development process.
				<br />
				<Tag>HTML</Tag>
				<Tag>CSS</Tag>
				<Tag>JavaScript</Tag>
				<Tag>Electron.JS</Tag>
			</div>
			<div className="card-item">
				<Icon className="card-item" type="code" theme="filled" /> <b><a href="https://github.com/AliNazariii/Game-Of-Tanks">Game of Tanks</a></b> (Summer 2018)
				<br /> A 2D java game containing both single-player & multiplayer modes. The player spawns with a tank and its mission is to eliminate all enemies on the map.
				<br /> The project is based on Buffer-Strategy implementation. It was our Advanced Programming final project and I implemented it with <a href="https://github.com/Amirhossein-Hediehloo">AmirHosein Hediehloo</a>.
				<br /> <a href="https://github.com/AliNazariii/Game-Of-Tanks">Here</a> is some more information about our development process.
				<br />
				<Tag>Java</Tag>
				<Tag>Swing</Tag>
				<Tag>Team-Work</Tag>
				<Tag>OOP</Tag>
			</div>
			<div className="card-item">
				<Icon className="card-item" type="code" theme="filled" /> <b><a href="https://github.com/AliNazariii/Download-Manager">JDM (Java Download Manager)</a></b> (Spring 2018)
				<br /> It was a download manager as our Advanced Programming mid-term project. 
				<br /> We want to learn swing and some basic concepts of networking through this project. Its UI was approximately a copy of EagleGet download manager.
				<br /> <a href="https://github.com/AliNazariii/Download-Manager">Here</a> is some more information about my development process.
				<br />
				<Tag>Java</Tag>
				<Tag>Swing</Tag>
				<Tag>Network</Tag>
				<Tag>OOP</Tag>
			</div>
			<div className="card-item">
				<Icon className="card-item" type="code" theme="filled" /> <b><a href="https://github.com/AliNazariii/Battle-Ship-Game">Battle Ship</a></b> (Spring 2018)
				<br /> A 2D java game containing both single-player & multiplayer modes. It hadn't UI and you should play through console.
				<br /> It was one of our exercises in the Advanced Programming course. We learned Object Oriented Programming in it.
				<br /> <a href="https://github.com/AliNazariii/Battle-Ship-Game">Here</a> is some more information about my development process.
				<br />
				<Tag>Java</Tag>
				<Tag>OOP</Tag>
			</div>
			<div className="card-item">
				<Icon className="card-item" type="code" theme="filled" /> <b><a href="https://github.com/AliNazariii/Hangman-Game">Hangman</a></b> (Autumn 2017)
				<br /> Hangman was our final project in the Fundamentals of Programming course in the first semester of the university. 
				<br /> It was a game that provides some words and you should guess that word. If you guess a wrong character, you see a man that was drowning more and more in the console.
				<br /> <a href="https://github.com/AliNazariii/Hangman-Game">Here</a> is some more information about my development process.
				<br />
				<Tag>C</Tag>
				<Tag>Pointer</Tag>
				<Tag>Struct</Tag>
			</div>
        </div>
      </Card>
    )
}

export default Project