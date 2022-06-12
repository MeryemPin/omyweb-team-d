import { NavLink, Route } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Project1 from "../assets/Project1.jpg";
import Project2 from "../assets/Project2.jpg";
import Project3 from "../assets/Project3.jpg";
import Team from "../assets/Team.jpg";

import "./Main.css";
import SectionFive from "../components/SectionFive";
import SectionSix from "../components/SectionSix";
import SectionSeven from "../components/SectionSeven";
import SectionEight from "../components/SectionEight";

const Main = () => {
  return (
    <main className="home">
      {/* <video src={Video} autoPlay loop ></video> */}
      <section className="welcome-section">
        {/* <img style={{width:"100%", height:"10em"}} src="../../public/omyweb.jpg" alt="" /> */}

        <div className="wel-div-btn">
          <NavLink className="wel-btn , wel-btn1" to="/contact">
            Contact Us
          </NavLink>
          <NavLink className="wel-btn , wel-btn2" to="/services">
            See our services
          </NavLink>
        </div>
      </section>
      {/* about section */}
      <section className="about">
        <h2>OUR CREATIVE TEAM IS HERE TO FULFILL YOUR BUSINESS GOALS</h2>
        <div className="about-text-img">
          <div className="about-text">
            <p>
              OmYweb is a full-service website development and digital marketing
              company located in sunny Barcelona specializing in SEO, content
              marketing and social media growth. We ranked top two on a list of
              “Women in Digital Business 2021”. We are a purely girl power team
              who are not afraid of any challenges. You don’t have to worry
              about anything with us because we put all your burdens on our tiny
              but strong shoulders. We develop websites for you from scratch,
              implementing the newest and the most working marketing strategies.
              {" "}
              <br />
              <a href="/case-studies">
                Find more case studies and reviews here
              </a>{" "}
            </p>
            {/* second text */}
            <p>
              Our team has brought success to our clients for almost 5 years and
              we will not stop with that. We have successfully worked with more
              than 350 companies and that’s not a limit. We are focused on web
              design and digital marketing services mainly for B2B industries
              such as education, construction, medicine, non-profit,
              manufacturing and professional services.
              <p className="omyweb-text">
                We are full of ideas! Don’t say “Oh my God!” say “OmYweb”. And
                you will NOT regret it!
              </p>
              <a href="/about">Learn more about us </a>
            </p>
          </div>
          <img className="about-img" src={Team} alt="about-us-img" />
        </div>
      </section>
      {/* case studies section caroussel */}
      <section className="case-studies">
        <h2>See our recent web design projects</h2>
        <Carousel>
          <Carousel.Item>
            <a href="/case-studies"><img className="d-block w-100" src={Project1} alt="First slide" /></a>
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <a href="/case-studies"><img className="d-block w-100" src={Project2} alt="Second slide" /></a>

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
          <a href="/case-studies">  <img className="d-block w-100" src={Project3} alt="Third slide" />
          </a>

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </section>
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
    </main>
  );
};

export default Main;
