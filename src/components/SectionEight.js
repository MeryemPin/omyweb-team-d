import Award1 from "../assets/Award1.png";
import Award2 from "../assets/Award2.png";
import Award3 from "../assets/Award3.png";
import Award4 from "../assets/Award4.png";
import Award5 from "../assets/Award5.png";
import "./SectionEight.css";

const SectionEight = () => {
    return ( 
        <section className="sec-awards">
        <h2>We are unstopable with the awards</h2>
        <div className="awards-imgs">
            <img src={Award1} alt="" />
            <img src={Award2} alt="" />
            <img src={Award3} alt="" />
            <img src={Award4} alt="" />
            <img src={Award5} alt="" />
        </div>
    </section>
     );
}
 
export default SectionEight;