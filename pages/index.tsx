import { Button, Card, Avatar, Icon } from 'antd'
import Head from 'next/head'
import "../styles/index.scss"
import "antd/dist/antd.css";
import "../styles/index.css"

function Home() {
  return(
    <div className="root">
      <Head>
        <title>Ali Nazari</title>
      </Head>
      <div className="my-layout">
        <div className="header">
          <div className="left-side header-left-side">
            <Avatar className="avatar" src="/avatar.jpg">USER</Avatar>
            <div className="header-texts">
              <h1 className="my-name">Ali Nazari</h1>
              <h2 className="my-work">Front-End Engineer</h2>
              <div className="social-networks">
                <Button className="icon" type="link" shape="circle" icon="github" href="https://github.com/AliNazariii" />
                <Button className="icon" type="link" shape="circle" href="https://www.linkedin.com/in/ali-nazariii/"><Icon type="linkedin" theme="filled" /></Button>
                <Button className="icon" type="link" shape="circle" icon="twitter" href="https://twitter.com/AliNazariii_" />
                <Button className="icon" type="link" shape="circle" href="https://www.instagram.com/_alinazariii_/"><Icon type="instagram" theme="filled" /></Button>
              </div>
            </div>
          </div>
          <div className="right-side header-right-side">
            <Button.Group>
              <Button type="danger" className="download-cv-button">
                <Icon type="file-pdf" />
                Download CV
              </Button>
            </Button.Group>
          </div>
        </div>
        <div className="boxes">
          <div className="left-side">
            <Card className="card">
              <h2 className="card-title">About Me</h2>
              <p className="card-paragraph">
                I am Ali Nazari. A 21 years old student that study Computer Engineering at Amirkabir University of Technology (Tehran Polytechnic). I was born in Tehran. 
              </p>
            </Card>
            <Card className="card">
              <h2 className="card-title">Education</h2>
              <p className="card-paragraph">
                <div className="card-item">
                  <Icon className="card-item" type="read" theme="filled" /> <b>B.Sc. Computer Engineering</b> - Amirkabir University of Technology (2017 - Present)
                  <br /> GPA: 16.53/20
                </div>
                <div className="card-item">
                  <Icon className="card-item" type="read" theme="filled" /> <b>Diploma Mathematics</b> - Alborz High School (2013 - 2017)
                  <br /> GPA: 19.86/20
                </div>
              </p>
            </Card>
            <Card className="card">
              <h2 className="card-title">Work and Volunteer Experiences</h2>
              <p className="card-paragraph">
                <div className="card-item">
                  <Icon className="card-item" type="setting" theme="filled" /> <b>Chairman (President)</b> - <a href="http://ceit-ssc.ir/">Students' Scientific Chapter of AUT-CE</a> (March 2019 - March 2020)
                  <br /> I was elected as a member and head of the management board by students of CE Department of Amirkabir University in March 2019.
                </div>
                <div className="card-item">
                  <Icon className="card-item" type="setting" theme="filled" /> <b>UI/UX Design Intern</b> - <a href="https://daneshkar.net/">Daneshkar Group</a> (March 2018 - June 2018)
                  <br /> I started to read some books related to user experience and also work with some prototyping tools like Adobe XD and Axure PR.
                </div>
              </p>
            </Card>
            <Card className="card">
              <h2 className="card-title">Projects</h2>
              <p className="card-paragraph">
                <div className="card-item">
                  <Icon className="card-item" type="code" theme="filled" /> <b><a href="https://ali-nazari.ir/">My Homepage</a></b> (Winter 2019) &emsp;
                  <br /> I developed this website as a homepage for myself in my free time.
                  <br /> <a href="https://github.com/AliNazariii/my-homepage">Here</a> you can see my repository for this project.
                  <br />
                  <Card className="tech-item"><p className="tech-item-text">React</p></Card>
                  <Card className="tech-item"><p className="tech-item-text">Next.JS</p></Card>
                  <Card className="tech-item"><p className="tech-item-text">Typescript</p></Card>
                  <Card className="tech-item"><p className="tech-item-text">Ant Design</p></Card>
                  <Card className="tech-item"><p className="tech-item-text">SASS</p></Card>
                  <Card className="tech-item"><p className="tech-item-text">CSS</p></Card>
                </div>
                <div className="card-item">
                  <Icon className="card-item" type="code" theme="filled" /> <b><a href="https://icpc.aut.ac.ir/">AUT ICPC Website</a></b> (Summer 2019)
                  <br /> I started front-end of this project with <a href="https://www.linkedin.com/in/keshavarz13/">MohamadAli Keshavarz</a>.
                  <br /> <a href="https://github.com/aut-icpc/ACM-frontend">Here</a> is some more information about our development process.
                  <br />
                  <Card className="tech-item"><p className="tech-item-text">React</p></Card>
                  <Card className="tech-item"><p className="tech-item-text">Material-UI</p></Card>
                  <Card className="tech-item"><p className="tech-item-text">CSS</p></Card>
                  <Card className="tech-item"><p className="tech-item-text">Team-Work</p></Card>
                </div>
                <div className="card-item">
                  <Icon className="card-item" type="code" theme="filled" /> <b><a href="https://github.com/AliNazariii/Elevator">Elevator</a></b> (Autumn 2018)
                  <br /> It was the final project of our Logical Cicuit course at AUT. 
                  <br />First, we think as a group to design an efficient FSM (finite state machine) for movement and also the management of the elevator.
                  <br /> <a href="https://github.com/AliNazariii/Elevator">Here</a> is some more information about it.
                  <br />
                  <Card className="tech-item"><p className="tech-item-text">Verilog</p></Card>
                  <Card className="tech-item"><p className="tech-item-text">FSM</p></Card>
                </div>
                <div className="card-item">
                  <Icon className="card-item" type="code" theme="filled" /> <b><a href="https://github.com/AliNazariii/progviz">ProGViz</a></b> (Summer 2018)
                  <br /> First I should say that this project was failed but I have done my tasks as a client-side developer whose task was to develop a web based application. I developed it just by HTML and CSS and at the end I create a desktop application by integrating Electron.JS.
                  <br /> ProGViz is a cross-platform graph-visualization desktop-application for visualizing well-known graphical representations of computer program source code such as CFGs, PDGs, ASTs, etc.
                  <br /> It was an internal project by a group of students of Amirkabir University of Technology, as a sub-project of the PhD thesis of <a href="http://linkedin.com/in/smghaffarian">Seyed Mohammad Ghaffarian</a>. 
                  <br /> <a href="https://github.com/AliNazariii/progviz">Here</a> is some more information about our development process.
                  <br />
                  <Card className="tech-item"><p className="tech-item-text">HTML</p></Card>
                  <Card className="tech-item"><p className="tech-item-text">CSS</p></Card>
                  <Card className="tech-item"><p className="tech-item-text">JavaScript</p></Card>
                  <Card className="tech-item"><p className="tech-item-text">Electron.JS</p></Card>
                </div>
                <div className="card-item">
                  <Icon className="card-item" type="code" theme="filled" /> <b><a href="https://github.com/AliNazariii/Game-Of-Tanks">Game of Tanks</a></b> (Summer 2018)
                  <br /> A 2D java game containing both single player & multi player modes. Player spawns with a tank and its mission is to eliminate all enemies on the map.
                  <br /> The project is based on Buffer-Strategy implementation. It was our Advanced Programming final project and I implemented it with <a href="https://github.com/Amirhossein-Hediehloo">AmirHosein Hediehloo</a>.
                  <br /> <a href="https://github.com/AliNazariii/Game-Of-Tanks">Here</a> is some more information about our development process.
                  <br />
                  <Card className="tech-item"><p className="tech-item-text">Java</p></Card>
                  <Card className="tech-item"><p className="tech-item-text">Swing</p></Card>
                  <Card className="tech-item"><p className="tech-item-text">Team-Work</p></Card>
                </div>
                <div className="card-item">
                  <Icon className="card-item" type="code" theme="filled" /> <b><a href="https://github.com/AliNazariii/Download-Manager">JDM (Java Download Manager)</a></b> (Spring 2018)
                  <br /> I started front-end of this project with <a href="https://www.linkedin.com/in/keshavarz13/">MohamadAli Keshavarz</a>. We developed it by ReactJS.
                  <br /> <a href="https://github.com/AliNazariii/Download-Manager">Here</a> is some more information about our development process.
                  <br />
                  <Card className="tech-item"><p className="tech-item-text">Java</p></Card>
                  <Card className="tech-item"><p className="tech-item-text">Swing</p></Card>
                  <Card className="tech-item"><p className="tech-item-text">Network</p></Card>
                </div>
                <div className="card-item">
                  <Icon className="card-item" type="code" theme="filled" /> <b><a href="https://github.com/AliNazariii/Battle-Ship-Game">Battle Ship</a></b> (Spring 2018)
                  <br /> I started front-end of this project with <a href="https://www.linkedin.com/in/keshavarz13/">MohamadAli Keshavarz</a>. We developed it by ReactJS.
                  <br /> <a href="https://github.com/AliNazariii/Battle-Ship-Game">Here</a> is some more information about our development process.
                  <br />
                  <Card className="tech-item"><p className="tech-item-text">Java</p></Card>
                </div>
                <div className="card-item">
                  <Icon className="card-item" type="code" theme="filled" /> <b><a href="https://github.com/AliNazariii/Hangman-Game">Hangman</a></b> (Autumn 2017)
                  <br /> I started front-end of this project with <a href="https://www.linkedin.com/in/keshavarz13/">MohamadAli Keshavarz</a>. We developed it by ReactJS.
                  <br /> <a href="https://github.com/AliNazariii/Hangman-Game">Here</a> is some more information about our development process.
                  <br />
                  <Card className="tech-item"><p className="tech-item-text" style={{marginLeft: "-5px"}}>C</p></Card>
                </div>
              </p>
            </Card>
            <Card className="card">
              <h2 className="card-title">Achievements</h2>
              <p className="card-paragraph">
                I am Ali Nazari. A 21 years old student
              </p>
            </Card>
          </div>
          <div className="right-side">
            <Card className="card">
              <p className="card-paragraph">
                <Icon className="card-item" type="environment" /> Tehran, Iran
                <br /><Icon className="card-item" type="mail" theme="filled" /> <a href="mailto:ali_nazari_ir@hotmail.com"> ali_nazari_ir@hotmail.com</a>
                {/* <br /><Icon className="card-item" type="mail" theme="filled" /><a href="mailto:ali.nazari@aut.ac.ir"> ali.nazari@aut.ac.ir</a> */}
                <br /><Icon className="card-item" type="phone" theme="filled" /> +98-9212812589
                <br /><Icon className="card-item" type="link" /><a href="http://ali-nazari.ir"> ali-nazari.ir</a>
                {/* <br /><Icon type="mail" theme="filled" /><a href="mailto:ali.nazari.porfosor2@gmail.com"> ali.nazari.porfosor2@gmail.com</a> */}
              </p>
            </Card>
            <Card className="card">
              <h2 className="card-title">Interests</h2>
              <p className="card-paragraph">
                <Icon className="card-item" type="book" theme="filled" /> Front-End Technologies
                <br /><Icon className="card-item" type="book" theme="filled" /> Graphic Design
                <br /><Icon className="card-item" type="book" theme="filled" /> Psychology
                <br /><Icon className="card-item" type="book" theme="filled" /> Social Activity
                <br /><Icon className="card-item" type="book" theme="filled" /> Teaching
              </p>
            </Card>
            <Card className="card">
              <h2 className="card-title">Skills</h2>
              <p className="card-paragraph">
                <div className="card-item">
                  <Icon type="double-right" />
                  <b> Programming Languages:</b>  
                  <br />&emsp;&emsp;Python, JavaScript, Java, C, Verilog, VHDL
                </div>
                <div className="card-item">
                  <Icon type="double-right" />
                  <b> Web and Application Development:</b>  
                  <br />&emsp;&emsp;ReactJS, HTML, CSS, NEXT.JS, SASS
                </div>
                <div className="card-item">
                  <Icon type="double-right" />  
                  <b> Database Systems:</b>  
                  <br />&emsp;&emsp;MySQL
                </div>
                <div className="card-item">
                  <Icon type="double-right" />
                  <b> Miscellaneous:</b>  
                  <br />&emsp;&emsp;Git, LATEX, ...
                </div>
                

              </p>
            </Card>
            <Card className="card">
              <h2 className="card-title">Languages</h2>
              <p className="card-paragraph">
                I am Ali Nazari. A 21 years old student
              </p>
            </Card>
          </div>
        </div>
        <h5 className="footer">Made with love by Ali Nazari</h5>
      </div>
    </div>
  )
}

export default Home
