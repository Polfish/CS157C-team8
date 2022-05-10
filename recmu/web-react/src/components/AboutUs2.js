import React from 'react'
import JsonData from '../data/data.json'

function About() {
  console.log('Hello', JsonData)

  // const [data, setData] = useState({})
  // useEffect(() => {
  //   setData(JsonData)
  // }, [])

  return (
    // <div id="about">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-xs-12 col-md-6">
    //         {' '}
    //         <img src="img/about.jpg" className="img-responsive" alt="" />{' '}
    //       </div>
    //       <div className="col-xs-12 col-md-6">
    //         <div className="about-text">
    //           <h2>About Us</h2>
    //           <p>{JsonData.About.paragraph}</p>
    //           <h3>Why Choose Us?</h3>
    //           <div className="list-style">
    //             <div className="col-lg-6 col-sm-6 col-xs-12">
    //               <ul>
    //                 {JsonData.About.Why.map((d, i) => (
    //                   <li key={`${d}-${i}`}>{d}</li>
    //                 ))}
    //               </ul>
    //             </div>
    //             <div className="col-lg-6 col-sm-6 col-xs-12">
    //               <ul>
    //                 {JsonData.About.Why2.map((d, i) => (
    //                   <li key={`${d}-${i}`}> {d}</li>
    //                 ))}
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default About
