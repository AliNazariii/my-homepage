import { Card, Icon } from 'antd'
import "../styles/index.scss"
import "antd/dist/antd.css";
import "../styles/index.css"

function Skills() {
    return(
      <Card className="card">
        <h2 className="card-title">Skills</h2>
        <p className="card-paragraph">
          <div className="card-item">
            <Icon type="double-right" />
            <b> Programming Languages:</b>  
            <br />&emsp;&emsp;Python, JavaScript, Java, C, Verilog, VHDL
          </div>
          <div className="card-item">
            <Icon type="double-right" />
            <b> Web and Application Development:</b>  
            <br />&emsp;&emsp;ReactJS, HTML, CSS, NEXT.JS, SASS
          </div>
          <div className="card-item">
            <Icon type="double-right" />  
            <b> Graphic Design:</b>  
            <br />&emsp;&emsp;Adobe Photoshop, Illustrator, XD
          </div>
          <div className="card-item">
            <Icon type="double-right" />
            <b> Miscellaneous:</b>  
            <br />&emsp;&emsp;Git, MySQL, LATEX, ...
          </div>
        </p>
      </Card>
    )
}

export default Skills