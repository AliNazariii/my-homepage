import { Card, Icon } from 'antd'
import "../styles/index.scss"
import "antd/dist/antd.css";
import "../styles/index.css"

function Contact() {
    return(
      <Card className="card">
        <p className="card-paragraph">
          <Icon className="card-item" type="environment" /> Tehran, Iran
          <br /><Icon className="card-item" type="mail" theme="filled" /> <a href="mailto:ali_nazari_ir@hotmail.com"> ali_nazari_ir@hotmail.com</a>
          {/* <br /><Icon className="card-item" type="mail" theme="filled" /><a href="mailto:ali.nazari@aut.ac.ir"> ali.nazari@aut.ac.ir</a> */}
          <br /><Icon className="card-item" type="phone" theme="filled" /> +98-9212812589
          <br /><Icon className="card-item" type="link" /><a href="http://ali-nazari.ir"> ali-nazari.ir</a>
          {/* <br /><Icon type="mail" theme="filled" /><a href="mailto:ali.nazari.porfosor2@gmail.com"> ali.nazari.porfosor2@gmail.com</a> */}
        </p>
      </Card>
    )
}

export default Contact