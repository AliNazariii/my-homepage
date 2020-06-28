import { Card } from 'antd'
import "../styles/index.scss"
import "antd/dist/antd.css";
import "../styles/index.css"
import { PhoneFilled, MailFilled, LinkOutlined } from '@ant-design/icons'

function Contact() {
    return(
      <Card className="card">
        <p className="card-paragraph">
          <Icon className="card-item icons-in-cards" type="environment" /> Tehran, Iran
          <br /><PhoneFilled className="card-item icons-in-cards" /> +98-9212812589
          <br /><MailFilled className="card-item  icons-in-cards" /> <a href="mailto:ali_nazari_ir@hotmail.com"> ali_nazari_ir@hotmail.com</a>
          <br /><MailFilled className="card-item  icons-in-cards" /> <a href="mailto:ali_nazari_ir@outlook.com"> ali_nazari_ir@outlook.com</a>
          <br /><MailFilled className="card-item  icons-in-cards" /> <a href="mailto:ali.nazari@aut.ac.ir"> ali.nazari@aut.ac.ir</a>
          <br /><MailFilled className="card-item  icons-in-cards" /> <a href="mailto:ali.nazari.porfosor2@gmail.com"> ali.nazari.porfosor2@gmail.com</a>
          <br /><LinkOutlined className="card-item icons-in-cards" /><a href="http://ali-nazari.ir"> ali-nazari.ir</a>
          <br /><LinkOutlined className="card-item icons-in-cards" /><a href="https://alinazariii.github.io/"> alinazariii.github.io</a>
          <br /><LinkOutlined className="card-item icons-in-cards" /><a href="http://ceit.aut.ac.ir/~nazari/"> ceit.aut.ac.ir/~nazari</a>
        </p>
      </Card>
    )
}

export default Contact