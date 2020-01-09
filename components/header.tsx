import { Button, Avatar, Icon } from 'antd'
import "../styles/index.scss"
import "antd/dist/antd.css";
import "../styles/index.css"

function Header() {
  return(
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
            <Button type="danger" className="download-cv-button" onClick={() => window.location.replace("https://raw.githubusercontent.com/AliNazariii/my-homepage/master/public/Ali%20Nazari%20-%20CV.pdf")}>
              <Icon type="file-pdf" />
              Download CV
            </Button>
          </Button.Group>
        </div>
      </div>
  )
}

export default Header