import { Card, Icon } from 'antd'
import "../styles/index.scss"
import "antd/dist/antd.css";
import "../styles/index.css"

function Interests() {
    return(
      <Card className="card">
        <h2 className="card-title">Interests</h2>
        <p className="card-paragraph">
          <Icon className="card-item icons-in-cards" type="book" theme="filled" /> Front-End Technologies
          <br /><Icon className="card-item icons-in-cards" type="book" theme="filled" /> Graphic Design
          <br /><Icon className="card-item icons-in-cards" type="book" theme="filled" /> Psychology
          <br /><Icon className="card-item icons-in-cards" type="book" theme="filled" /> Teaching
        </p>
      </Card>
    )
}

export default Interests