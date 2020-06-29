import { Card } from 'antd'
import { BookFilled } from '@ant-design/icons'

function Interests() {
    return(
      <Card className="card">
        <h2 className="card-title">Interests</h2>
        <p className="card-paragraph">
          <BookFilled className="card-item icons-in-cards" /> Front-End Technologies
          <br /><BookFilled className="card-item icons-in-cards" /> Graphic Design
          <br /><BookFilled className="card-item icons-in-cards" /> Psychology
          <br /><BookFilled className="card-item icons-in-cards" /> Teaching
        </p>
      </Card>
    )
}

export default Interests