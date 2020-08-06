import { Card } from 'antd'
import { MessageOutlined } from '@ant-design/icons'

export default function Languages(props) {
    return(
		<Card className="card">
			<h2 className="card-title">Languages</h2>
			<div className="card-paragraph">
				{props.data.map((item, index) => (
					<div className="card-item" key={index}>
						<MessageOutlined className="icons-in-cards" />
						<b className="card-bolds"> {item.title}: </b> {item.level} 
					</div>
				))}
			</div>
		</Card>
    )
}