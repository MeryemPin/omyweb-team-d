import Katy from "../assets/Katy.png";
import Meryem from "../assets/Meryem.png";
import Noura from "../assets/Noura.png";
import Dani from "../assets/Dani.png";

import "./About.css";

const About = () => {
    return ( 
        <main className="about">
            <div class="opening">
            <h1>Meet OmYweb Team</h1>
        <h2>About us</h2>
        <p>Our Web Design and Marketing Company offers more than a simple design. We develop website for you from the scratch, implementing the newest and the most working marketing strategies. No double costs, only fair prices! We give quality service and our reputation speaks for itself. We are focused on web design and digital marketing services mainly for B2B industries such as education, construction, medicine, non-profit, manufacturing and professional services.</p>
        <p>Our team has been bringing success to our clients for almost 5 years and we will not stop with that. Our values - are our clients’ smiles, we like our costumers seeing “OmYweb” results in the end. Just that simple: “We are happy - when you are happy!”</p>
        <p>We are magic four ladies, who started our ways studying DIGITAL Careers together and moved on together, facing difficult project and interesting challenges. From every project we have gained valuable knowledge and great experiences. We never stop with good outcomes we only go with the best ones! Meet our digital team. We are happy to impress you and your business.</p>
    </div>
    <div class="person">
        <div class="container">
            <div class="container-inner">
                <img class="circle" src={Katy} alt="Kate"/>
            </div>
        </div>
        <div class="divider"></div>
        <div class="name">Katharina
        </div>
        <div class="title">Marketing Manager</div>
    </div>
    <div class="person">
        <div class="container">
            <div class="container-inner">
                <img class="circle" src={Dani} alt="Dani"/>
            </div>
        </div>
        <div class="divider"></div>
        <div class="name">Dani</div>
        <div class="title">Software Engineer</div>
    </div>
    <div class="person">
        <div class="container">
            <div class="container-inner">
                <img class="circle" src={Meryem} alt="Meryem"/>
            </div>
        </div>
        <div class="divider"></div>
        <div class="name">Meryem</div>
        <div class="title">Software Engineer</div>
    </div>
    <div class="person">
        <div class="container">
            <div class="container-inner">
                <img class="circle" src={Noura} alt="Noura"/>
            </div>
        </div>
        <div class="divider"></div>
        <div class="name">Noura</div>
        <div class="title">Marketing Manager</div>
    </div>
        </main>
     );
}
 
export default About;