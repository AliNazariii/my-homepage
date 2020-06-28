import { Card } from 'antd'
import { DoubleRightOutlined } from '@ant-design/icons'

function Skills() {
    return(
      <Card className="card">
        <h2 className="card-title">Skills</h2>
        <div className="card-paragraph">
          <div className="card-item">
            <DoubleRightOutlined className="icons-in-cards" />
            <b className="card-bolds"> Web and Application Development:</b>  
            <br />&emsp;&emsp;ReactJS, HTML, CSS, NEXT.JS, SASS, NodeJS
          </div>
          <div className="card-item">
            <DoubleRightOutlined className="icons-in-cards" />
            <b className="card-bolds"> Programming Languages:</b>  
            <br />&emsp;&emsp;Python, JavaScript, Java, C, Verilog, VHDL
          </div>
          <div className="card-item">
            <DoubleRightOutlined className="icons-in-cards" />  
            <b className="card-bolds"> Graphic Design:</b>  
            <br />&emsp;&emsp;Adobe Photoshop, Adobe Illustrator, XD
          </div>
          <div className="card-item">
            <DoubleRightOutlined className="icons-in-cards" />  
            <b className="card-bolds"> Soft Skills:</b>  
            <br />&emsp;&emsp; Teamwork, Patience, Accountability, Time management, Leadership
          </div>
          <div className="card-item">
            <DoubleRightOutlined className="icons-in-cards" />
            <b className="card-bolds"> Miscellaneous:</b>  
            <br />&emsp;&emsp;Git, OOP, MySQL, LATEX, Bash, Linux, Docker, ...
          </div>
        </div>
      </Card>
    )
}

export default Skills