import { Card, Icon } from 'antd'
import "../styles/index.scss"
import "antd/dist/antd.css";
import "../styles/index.css"

function Education() {
    return(
      <Card className="card">
        <h2 className="card-title">Education</h2>
        <div className="card-paragraph">
          <div className="card-item">
            <Icon className="card-item" type="read" theme="filled" /> <b>B.Sc. Computer Engineering</b> - Amirkabir University of Technology (2017 - Present)
            <br /> GPA: 16.53/20
          </div>
          <div className="card-item">
            <Icon className="card-item" type="read" theme="filled" /> <b>Diploma Mathematics</b> - Alborz High School (2013 - 2017)
            <br /> GPA: 19.86/20
          </div>
        </div>
      </Card>
    )
}

export default Education