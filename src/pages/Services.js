import Services1 from "../assets/Services1.jpg";
import Services2 from "../assets/Services2.jpg";
import Services3 from "../assets/Services3.jpg";
import Services4 from "../assets/Services4.jpg";
import Services5 from "../assets/Services5.png";

import "./Services.css";

const Services = () => {
    return ( 
        <main className="services">
            <section>
    <div className="grid-flex">
      <div className="col col-image" > <img src={Services1} alt="" />
      </div>
      <div className="col col-text">
        <div className="Aligner-item">
          <h3>We provide guidance to you</h3>
          <p>&ldquo;Our team of professionals provides you with leadership and guidance. We use complete data research to attract and connect the right audience with your business. We are results driven, and no matter how much work is done - we work hard hard for your success.&rdquo;
            <cite> <b>
                <br /><a  href="https://wordpress.com">Read more>></a> </b></cite>
          </p>
        </div>
      </div>
    </div>
    <div className="grid-flex">
      <div className="col col-image" > <img src={Services2} alt="" />
        &nbsp;
      </div>
      <div className="col col-text col-left">
        <div className="Aligner-item">
          <h3>Digital analysis</h3>
          <p>&ldquo;We don’t do magic, we just use Analytics to understand where your website have flaws and what strategies will work better for your business. We track the metrics to build and maintain constant traffic to your website.&rdquo;
            <cite><b>
                <br /><a  href="https://wordpress.com">Read more>></a> </b></cite>
          </p>
        </div>
      </div>
    </div>
    <div className="grid-flex">
      <div className="col col-image" > <img src={Services3} alt="" />
        &nbsp;
      </div>
      <div className="col col-text">
        <div className="Aligner-item">
          <h3>Strategic consulting</h3>
          <p>&ldquo;Let's look at your business precisely. Modern World changes rapidly, competitors are growing, the environment is changing, but all we need to do is to adapt to new realities and perform better business. Strategies we provide are made by experienced people, who know new trends and implement them successfully.&rdquo;
            <cite><b><a  href="https://wordpress.com">Read more>></a> </b></cite>
          </p>
        </div>
      </div>
    </div>
    <div className="grid-flex">
      <div className="col col-image" > <img src={Services4} alt="" />
        &nbsp;
      </div>
      <div className="col col-text col-left">
        <div className="Aligner-item">
          <h3>Brand audit and competitive analysis</h3>
          <p>&ldquo;Competitors' performance is very important to us because we strive to do better. We don’t compare to decide who is doing their best, we compare to win the market. Please put brand audit on our shoulders - we love it and we do it well. &rdquo;
            <cite><b><a  href="https://wordpress.com">Read more>></a> </b></cite>
          </p>
        </div>
      </div>
    </div>
    <div className="grid-flex">
      <div className="col col-image" > <img src={Services5} alt="" />
        &nbsp;
      </div>
      <div className="col col-text">
        <div className="Aligner-item">
          <h3>Brand evolution</h3>
          <p>&ldquo;We shouldnt persuade you that branding is super important, right? It elevates your product or business from being a mere commodity to becoming something with a unique character. We will carefully design your marketing and brand strategy to transform that very first click into repeat business that is based on brand loyalty.&rdquo;
            <cite><b><a  href="https://wordpress.com">
                <br />
                Read more>></a> </b></cite>
          </p>
        </div>
      </div>
    </div>
  </section>
        </main>
     );
}
 
export default Services;