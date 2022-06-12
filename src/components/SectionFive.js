import Shine from "../assets/Shine.png";
import "./SectionFive.css";
import {FcIdea} from 'react-icons/fc'
const SectionFive = () => {

    const sectionFiveData = [{
        "title": "Branding, Messaging, Design",
        "text": "Designing your brand is not an easy thing to do? We will assist you here! Our team will create unique logos, color palettes and messaging for you."
        },
        {
        "title": "Digital strategy and Consulting",
        "text": "Not sure how to find the top strategy for your business? Our professional digital experts will guide you with resultative digital goals."
        },
        {
        "title": "Web design and development",
        "text": "Coding a website is not your thing? That is why you need us. We build perfect websites from scratch. Get started with a modern, responsive, creative website. Get the results out of it!"
        },
        {
        "title": "eCommerce",
        "text": "We have heard you want to sell your products online? Hey, that is what we can do extremely well! Designing a store is what we specialize in. We have created 235 shops for our clients, because we know how to make them happy."
        },
        {
        "title":"Photography and Videography",
        "text": "We want your website and social media looking amazing. We use custom videos and pictures which can not be found anywhere else on the Internet. How about using the latest digital marketing strategies? We create media for YOUR needs and style."
        }, 
        {
        "title":"Digital Marketing",
        "text": "We use the latest digital marketing strategies for our companies. We create media for your need and style. Our content and SEO will drive your business forward. We know what you need and we work for it!"
        }]
    return ( 

      <section className="section-5">
      <div className="sec-5-title">
        <h2>Get the website you deserve</h2>
        <p>Our experts are here to guide you</p>
      </div>
     <div className="div-points-img">
          <div className="points-container">
              {sectionFiveData.map( (point) => {
                  return (
                  <div className="points">
                      <h6> <FcIdea /> {point.title}</h6>
                      
                      <p>{point.text}</p>
                  </div>
                  )
    
              })}
          </div>
          <div className="img-shine">
            <img src={Shine} alt="shine" />
          </div>
     </div>
    </section>
     );
}
 
export default SectionFive;