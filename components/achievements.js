import { Card } from 'antd'
import { TrophyFilled } from '@ant-design/icons'

export default function Achievements(props) {
    return(
		<Card className="card">
			<h2 className="card-title">Achievements</h2>
			<div className="card-paragraph">
				{props.data.map((item, index) => (
				<div className="card-item" key={index}>
					<TrophyFilled className="icons-in-cards" />
					&nbsp;{item.text}
				</div>
				))}
			</div>
		</Card>
    )
}