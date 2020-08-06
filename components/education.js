import { Card } from 'antd'
import { ReadFilled } from '@ant-design/icons'

export default function Education(props) {
    return(
        <Card className="card">
            <h2 className="card-title">Education</h2>
            <div className="card-paragraph">
                {props.data.map((item, index) => (
                    <div className="card-item" key={index}>
                        <ReadFilled className="card-item icons-in-cards" /> <b className="card-bolds">{item.grade}</b>
                        <br /> {item.place}
                        <br /> {item.gpa}
                    </div>
                ))}
            </div>
        </Card>
    )
}