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
                <Button color="default" type="link" shape="circle" icon="github" href="https://github.com/AliNazariii" />
                <Button type="link" shape="circle" icon="linkedin" href="https://www.linkedin.com/in/ali-nazariii/" />
                <Button type="link" shape="circle" icon="twitter" href="https://twitter.com/AliNazariii_" />
                <Button type="link" shape="circle" icon="instagram" href="https://www.instagram.com/_alinazariii_/" />
              </div>
            </div>
          </div>
          <div className="right-side header-right-side">
            <Button.Group>
              <Button className="download-cv-button" type="primary">
                <Icon type="file-pdf" />
                Download CV
              </Button>
            </Button.Group>
          </div>
        </div>
        <div className="boxes">
          <div className="left-side">
            <Card className="card">
              <h2>About Me</h2>
              <p>
                I am Ali Nazari. A 21 years old student that study Computer Engineering at Amirkabir University of Technology (Tehran Polytechnic). I was born in Tehran. 
              </p>
            </Card>
            <Card className="card">
              <h2>Education</h2>
              <p>
                I am Ali Nazari. A 21 years old student that study Computer Engineering at Amirkabir University of Technology (Tehran Polytechnic). I was born in Tehran. 
              </p>
            </Card>
            <Card className="card">
              <h2>Work Experiences</h2>
              <p>
                I am Ali Nazari. A 21 years old student that study Computer Engineering at Amirkabir University of Technology (Tehran Polytechnic). I was born in Tehran. 
              </p>
            </Card>
            <Card className="card">
              <h2>Other Experiences</h2>
              <p>
                I am Ali Nazari. A 21 years old student that study Computer Engineering at Amirkabir University of Technology (Tehran Polytechnic). I was born in Tehran. 
              </p>
            </Card>
            <Card className="card">
              <h2>Achievements</h2>
              <p>
                I am Ali Nazari. A 21 years old student
              </p>
            </Card>
          </div>
          <div className="right-side">
            <Card className="card">
              <p>
                I am Ali Nazari. A 21 years old student that 
              </p>
            </Card>
            <Card className="card">
              <h2>Interests</h2>
              <p>
                I am Ali Nazari. A 21 years old student that 
              </p>
            </Card>
            <Card className="card">
              <h2>Skills</h2>
              <p>
                I am Ali Nazari. A 21 years old student that 
              </p>
            </Card>
            <Card className="card">
              <h2>Languages</h2>
              <p>
                I am Ali Nazari. A 21 years old student
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
