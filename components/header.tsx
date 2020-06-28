import { Button, Avatar } from 'antd'
import { LinkedinFilled, InstagramFilled, FilePdfOutlined, GithubOutlined, TwitterOutlined } from '@ant-design/icons'

function Header() {
  return(
      <div className="header">
        <div className="left-side header-left-side">
          <Avatar className="avatar" src="/avatar.jpg">USER</Avatar>
          <div className="header-texts">
            <h1 className="my-name">Ali Nazari</h1>
            {/* <h2 className="my-work">Front-End Engineer</h2> */}
            <div className="social-networks">
              <Button style={{borderRadius: "5px"}} className="icon" type="link" icon={<GithubOutlined style={{ fontSize: 24 }} />} href="https://github.com/AliNazariii" />
              <Button style={{borderRadius: "5px"}} className="icon" type="link" icon={<LinkedinFilled style={{ fontSize: 24 }} />} href="https://www.linkedin.com/in/ali-nazariii/" />
              <Button style={{borderRadius: "5px"}} className="icon" type="link" icon={<TwitterOutlined style={{ fontSize: 24 }} />} href="https://twitter.com/AliNazariii_" />
              <Button style={{borderRadius: "5px"}} className="icon" type="link" icon={<InstagramFilled style={{ fontSize: 24 }} />} href="https://www.instagram.com/_alinazariii_/" />
            </div>
          </div>
        </div>
        <div className="right-side header-right-side">
          <Button.Group>
            <Button style={{borderRadius: "5px"}} className="download-cv-button" onClick={() => window.location.replace("https://raw.githubusercontent.com/AliNazariii/my-homepage/master/public/AliNazari-CV.pdf")}>
              <FilePdfOutlined />
              Download CV
            </Button>
          </Button.Group>
        </div>
      </div>
  )
}

export default Header