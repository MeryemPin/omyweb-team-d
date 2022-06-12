import "./SectionSix.css";
import Video1 from "../assets/Video1.mp4";
import Video2 from "../assets/Video2.mp4";

const SectionSix = () => {
  {
    /* <video src={Video} autoPlay loop ></video> */
  }
  return (
    <section className="testimonials">
      <h2>Video Testimonials</h2>
      <div className="feedback">
        <figure>
          <video className="video" src={Video1} autoPlay loop></video>
          {/* <img src={Project1} alt="" /> */}
          <figcaption>
            „OmYweb took my burdens on their shoulders, by lifting my website
            up! Now I can enjoy time with my family!“ 
            <br />
             Karolina, Tour Agency
            owner.
          </figcaption>
        </figure>

        <figure>
          <video className="video" src={Video2} autoPlay loop></video>
          {/* <img src={Project1} alt="" /> */}
          <figcaption>
            „Grateful to OmYweb team for taking over one of my web projects.
            Dealing with 2 businesses simultaneously is not an easy thing to
            do!“ 
            <br /> Mary, Art centre and Women Rights Organization owner.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default SectionSix;
