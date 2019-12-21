import { Button, Card, Avatar, Icon } from 'antd'
import "../styles/index.scss"
import "antd/dist/antd.css";
import "../styles/index.css"

function Home() {
  return(
    <div className="root">
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
                  <Icon className="card-item" type="code" theme="filled" /> <b><a href="https://icpc.aut.ac.ir/">AUT ICPC Website</a></b> (Summer 2019)
                  <br /> I started front-end of this project with <a href="https://www.linkedin.com/in/keshavarz13/">MohamadAli Keshavarz</a>. We developed it by ReactJS.
                  <br /> <a href="https://github.com/aut-icpc/ACM-frontend">Here</a> is some more information about our development process.
                </div>
                <div className="card-item">
                  <Icon className="card-item" type="code" theme="filled" /> <b><a href="https://icpc.aut.ac.ir/">Elevator</a></b> (Autumn 2018)
                  <br /> I started front-end of this project with <a href="https://www.linkedin.com/in/keshavarz13/">MohamadAli Keshavarz</a>. We developed it by ReactJS.
                  <br /> <a href="https://github.com/aut-icpc/ACM-frontend">Here</a> is some more information about our development process.
                </div>
                <div className="card-item">
                  <Icon className="card-item" type="code" theme="filled" /> <b><a href="https://icpc.aut.ac.ir/">ProgViz</a></b> (Summer 2018)
                  <br /> I started front-end of this project with <a href="https://www.linkedin.com/in/keshavarz13/">MohamadAli Keshavarz</a>. We developed it by ReactJS.
                  <br /> <a href="https://github.com/aut-icpc/ACM-frontend">Here</a> is some more information about our development process.
                </div>
                <div className="card-item">
                  <Icon className="card-item" type="code" theme="filled" /> <b><a href="https://icpc.aut.ac.ir/">Game of Tanks</a></b> (Summer 2018)
                  <br /> I started front-end of this project with <a href="https://www.linkedin.com/in/keshavarz13/">MohamadAli Keshavarz</a>. We developed it by ReactJS.
                  <br /> <a href="https://github.com/aut-icpc/ACM-frontend">Here</a> is some more information about our development process.
                </div>
                <div className="card-item">
                  <Icon className="card-item" type="code" theme="filled" /> <b><a href="https://icpc.aut.ac.ir/">JDM (Java Download Manager)</a></b> (Spring 2018)
                  <br /> I started front-end of this project with <a href="https://www.linkedin.com/in/keshavarz13/">MohamadAli Keshavarz</a>. We developed it by ReactJS.
                  <br /> <a href="https://github.com/aut-icpc/ACM-frontend">Here</a> is some more information about our development process.
                </div>
                <div className="card-item">
                  <Icon className="card-item" type="code" theme="filled" /> <b><a href="https://icpc.aut.ac.ir/">Battle Ship</a></b> (Spring 2018)
                  <br /> I started front-end of this project with <a href="https://www.linkedin.com/in/keshavarz13/">MohamadAli Keshavarz</a>. We developed it by ReactJS.
                  <br /> <a href="https://github.com/aut-icpc/ACM-frontend">Here</a> is some more information about our development process.
                </div>
                <div className="card-item">
                  <Icon className="card-item" type="code" theme="filled" /> <b><a href="https://icpc.aut.ac.ir/">Hangman</a></b> (Autumn 2017)
                  <br /> I started front-end of this project with <a href="https://www.linkedin.com/in/keshavarz13/">MohamadAli Keshavarz</a>. We developed it by ReactJS.
                  <br /> <a href="https://github.com/aut-icpc/ACM-frontend">Here</a> is some more information about our development process.
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
