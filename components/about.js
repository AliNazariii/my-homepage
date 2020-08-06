import { Card } from 'antd'

export default function About(props) {
    return(
		<Card className="card">
			<h2 className="card-title">About Me</h2>
			<p className="card-paragraph">
				{props.data.text}
			</p>
		</Card>
    )
}