import { Card } from 'antd'
import { PhoneFilled, MailFilled, LinkOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { Fragment } from 'react'

export default function Contact(props) {
    return(
		<Card className="card">
			<p className="card-paragraph">
				<EnvironmentOutlined className="card-item icons-in-cards" /> Tehran, Iran
				<br /><PhoneFilled className="card-item icons-in-cards" /> +98-9212812589
				{props.data.mails.map((mail, index) => (
					<Fragment key={index}>
						<br /><MailFilled className="card-item  icons-in-cards" /> <a href={`mailto:${mail.address}`}> {mail.address}</a>
					</Fragment>
				))}
				{props.data.sites.map((item, index) => (
					<Fragment key={index}>
						<br /><LinkOutlined className="card-item icons-in-cards" /><a href={`http://${item.site}`}> {item.site}</a>
					</Fragment>
				))}
			</p>
		</Card>
    )
}