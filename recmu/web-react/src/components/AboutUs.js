//

// function AboutUs() {
//   return (
//     <div>
//       <h2>About Us</h2>
//     </div>
//   )
// }

import * as React from 'react'
//import * as ReactDOM from 'https://cdn.skypack.dev/react-dom@17.0.1'
// import styles from "./AboutUs.scss";
import './AboutUs.scss'

function AboutUsPage() {
  return (
    <div className="wrapper">
      <Card
        img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="The Everyday Salad"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />
    </div>
  )
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} className="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn">View Recipe</button>
    </div>
  )
}

//ReactDOM.render(<AboutUsPage />, document.getElementById('root'))

// export default AboutUs

export default AboutUsPage
