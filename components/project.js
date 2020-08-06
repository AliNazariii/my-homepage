import { Card, Tag } from 'antd';
import { CodeFilled } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown/with-html';

export default function Project(props) {
    return(
      <Card className="card">
        <h2 className="card-title">Projects</h2>
        <div className="card-paragraph">
			{props.data.map((item, index) => (	
				<div className="card-item" key={index}>
					<CodeFilled className="card-item icons-in-cards" /> <b><a href={item.link}>{item.title}</a></b> {item.date} &emsp;
					<ReactMarkdown escapeHtml={false} source={item.description} />
					<a style={{ margin: "0 5px 0 0"}} href={item.repo}>Repository</a>
					{item.tags.map((tag, i) => (
						<Tag key={i} className="project-tag">{tag.title}</Tag>
					))}
				</div>
			))}
        </div>
      </Card>
    )
}