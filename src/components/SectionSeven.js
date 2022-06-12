import Blog1 from "../assets/Blog1.jpg";
import Blog2 from "../assets/Blog2.jpg";
import Blog3 from "../assets/Blog3.jpg";
import "./SectionSeven.css";

const SectionSeven = () => {
  return (
    <section className="check-blog">
      <h2>Check our blog</h2>
      <div className="div-blog">
        <a href="/blog">
          <figure>
            <img src={Blog1} alt="marketing-tips" />
            <figcaption>
            Keep up to date in marketing trends to stay tuned.
            </figcaption>
          </figure>
        </a>

        <a href="/blog">
          <figure>
            <img src={Blog2} alt="seo" />
            <figcaption>
            Free SEO?
Impossible becomes possible after reading this.
            </figcaption>
          </figure>
        </a>

        <a href="/blog">
          <figure>
            <img src={Blog3} alt="norture-clients" />
            <figcaption>High end costumer relations=your business’ benefits.</figcaption>
          </figure>
        </a>
      </div>
    </section>
  );
};

export default SectionSeven;
