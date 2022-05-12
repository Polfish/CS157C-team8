//

// function AboutUs() {
//   return (
//     <div>
//       <h2>About Us</h2>
//     </div>
//   )
// }

import * as React from 'react'
import './AboutUs.scss'

function AboutUsPage() {
  return (
    <div className="wrapper">
      <Card
        img="https://images.unsplash.com/photo-1600442715242-3e496a4d7ec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
        title="Welcome to RecMu"
        description="Prepare for RecMu...The finest musical recommendations, finally within your reach. With RecMu, it’s easy to find the right music or podcast for every moment – on your phone, your computer, your tablet and more.

        There are millions of tracks and episodes on RecMu. So whether you’re behind the wheel, working out, partying or relaxing, the right music or podcast is always at your fingertips. Choose what you want to listen to, or let RecMu surprise you.
        
        You can also browse through the collections of friends, artists, and celebrities, or create a radio station and just sit back.
        
        Soundtrack your life with RecMu. 
        Brought to you by Anni Shao, Paul Chon and Pranav Ghaskadbi"
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
      {/* <button className="card__btn">View Recipe</button> */}
    </div>
  )
}

export default AboutUsPage
