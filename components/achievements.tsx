import { Card } from 'antd'
import "../styles/index.scss"
import "antd/dist/antd.css";
import "../styles/index.css"
import { TrophyFilled } from '@ant-design/icons'

function Achievements() {
    return(
      <Card className="card">
        <h2 className="card-title">Achievements</h2>
        <div className="card-paragraph">
          <div className="card-item">
            <TrophyFilled className="icons-in-cards" />
            &nbsp;Achieved top 0.3% place among all applicants of the Nationwide University Entrance Exam for B.Sc. in Math. 
            and Engineering (Approximately 137000 applicants), Iran - July 2017.
          </div>
          <div className="card-item">
            <TrophyFilled className="icons-in-cards" />
            &nbsp;Accepted in first stage of Chemistry Olympiad in National Organization for Development of Exceptional Talents, Iran - June 2015.
          </div>
        </div>
      </Card>
    )
}

export default Achievements