import { Card } from 'antd'
import { BookFilled } from '@ant-design/icons'

function Interests() {
    return(
      <Card className="card">
        <h2 className="card-title">Interests</h2>
        <p className="card-paragraph">
          <BookFilled className="card-item icons-in-cards" type="book" theme="filled" /> Front-End Technologies
          <br /><BookFilled className="card-item icons-in-cards" type="book" theme="filled" /> Graphic Design
          <br /><BookFilled className="card-item icons-in-cards" type="book" theme="filled" /> Psychology
          <br /><BookFilled className="card-item icons-in-cards" type="book" theme="filled" /> Teaching
        </p>
      </Card>
    )
}

export default Interests