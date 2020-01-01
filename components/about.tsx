import { Card, Icon } from 'antd'
import "../styles/index.scss"
import "antd/dist/antd.css";
import "../styles/index.css"

function About() {
    return(
      <Card className="card">
        <h2 className="card-title">About Me</h2>
        <p className="card-paragraph">
          I am Ali Nazari. A 21 years old student that study Computer Engineering at Amirkabir University of Technology (Tehran Polytechnic). I was born in Tehran. 
        </p>
      </Card>
    )
}

export default About