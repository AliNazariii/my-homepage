import { Card, Icon } from 'antd'
import "../styles/index.scss"
import "antd/dist/antd.css";
import "../styles/index.css"

function Languages() {
    return(
      <Card className="card">
        <h2 className="card-title">Languages</h2>
        <div className="card-paragraph">
          <div className="card-item">
            <Icon type="message" />
            <b> Persian: </b> Native 
          </div>
          <div className="card-item">
            <Icon type="message" />
            <b> English: </b> Limited working proficiency 
          </div>
          <div className="card-item">
            Also Familiar with Arabic
          </div>
        </div>
      </Card>
    )
}

export default Languages