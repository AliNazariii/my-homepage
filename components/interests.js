import { Card } from 'antd'
import { BookFilled } from '@ant-design/icons'
import { Fragment } from 'react'

export default function Interests(props) {
    return(
        <Card className="card">
            <h2 className="card-title">Interests</h2>
            <p className="card-paragraph">
                {props.data.map((item, index) => (
                    <Fragment key={index}>
                        <BookFilled className="card-item icons-in-cards" /> {item.title}
                        <br />
                    </Fragment>
                ))}
            </p>
        </Card>
    )
}