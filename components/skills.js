import { Card } from 'antd'
import { DoubleRightOutlined } from '@ant-design/icons'

export default function Skills(props) {
    return(
      <Card className="card">
        <h2 className="card-title">Skills</h2>
        <div className="card-paragraph">
			{props.data.map((item, index) => (
				<div className="card-item" key={index}>
					<DoubleRightOutlined className="icons-in-cards" />
					<b className="card-bolds"> {item.category}:</b>  
					<br />&emsp;&emsp;{item.skills.map(i => i.name).join(', ')}
				</div>
			))}
        </div>
      </Card>
    )
}