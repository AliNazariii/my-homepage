import { Card, Icon } from 'antd'
import "../styles/index.scss"
import "antd/dist/antd.css";
import "../styles/index.css"

function Work() {
    return(
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
    )
}

export default Work