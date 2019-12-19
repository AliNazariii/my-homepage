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
                I am Ali Nazari. A 21 years old student that study Computer Engineering at Amirkabir University of Technology (Tehran Polytechnic). I was born in Tehran. 
              </p>
            </Card>
            <Card className="card">
              <h2 className="card-title">Work Experiences</h2>
              <p className="card-paragraph">
                I am Ali Nazari. A 21 years old student that study Computer Engineering at Amirkabir University of Technology (Tehran Polytechnic). I was born in Tehran. 
              </p>
            </Card>
            <Card className="card">
              <h2 className="card-title">Other Experiences</h2>
              <p className="card-paragraph">
                I am Ali Nazari. A 21 years old student that study Computer Engineering at Amirkabir University of Technology (Tehran Polytechnic). I was born in Tehran. 
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
                <br /><Icon className="card-item" type="mail" theme="filled" /> Main:<a href="mailto:ali_nazari_ir@hotmail.com"> ali_nazari_ir@hotmail.com</a>
                <br /><Icon className="card-item" type="mail" theme="filled" /><a href="mailto:ali.nazari@aut.ac.ir"> ali.nazari@aut.ac.ir</a>
                <br /><Icon className="card-item" type="phone" /> +98-9212812589
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
                I am Ali Nazari. A 21 years old student that 
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
