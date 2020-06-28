import { Card } from 'antd'
import "../styles/index.scss"
import "antd/dist/antd.css";
import "../styles/index.css"
import { MessageOutlined } from '@ant-design/icons'

function Languages() {
    return(
      <Card className="card">
        <h2 className="card-title">Languages</h2>
        <div className="card-paragraph">
          <div className="card-item">
            <MessageOutlined className="icons-in-cards" />
            <b className="card-bolds"> Persian: </b> Native 
          </div>
          <div className="card-item">
            <MessageOutlined className="icons-in-cards" />
            <b className="card-bolds"> English: </b> Limited working proficiency 
          </div>
          <div className="card-item">
            Also Familiar with Arabic
          </div>
        </div>
      </Card>
    )
}

export default Languages