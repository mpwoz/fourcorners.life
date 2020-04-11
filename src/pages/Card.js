import React, { Component } from "react"
import { Link } from "gatsby"
import { useSpring, animated as a } from 'react-spring'

import "./Card.scss"


export class Card extends Component {
  render() {
    let { title, body, icon } = this.props

    let IconTag = this.props.icon

    return (
      <div className="card">
        <div className="card-content">
          <p className="title">
            {title}
          </p>

          <IconTag size={64}/>

          <p className="subtitle">
            {/*{body}*/}
          </p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              <Link to={"/learn/"}>Learn more</Link>
            </span>
          </p>
        </footer>
      </div>
    )
  }

}