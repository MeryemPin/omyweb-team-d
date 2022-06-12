import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    // <footer className="footer">
    //     here is the footer
    // </footer>
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-center p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Socialize with us:</span>
        </div>
        <div>
          <a href="https://www.facebook.com/" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          {/* <a href='' className='me-4 text-reset'>
              <i className='fab fa-google'></i>
            </a> */}
          <a href="https://www.instagram.com" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          {/* <a href='' className='me-4 text-reset'>
              <i className='fab fa-github'></i>
            </a> */}
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-5 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i> Our web design and marketing
                agency
              </h6>
              <p>
                Barcelona web design and digital marketing agency. We design
                your responsive website and help you grow your business using
                SEO, Content Marketing, Social Media Marketing. We are driven by
                the newest strategies and trends. Only good quality and only
                fair prices.We specialize in content management system
                responsive websites, SEO, SEM, and Social Media Marketing. Our
                results are talking about us.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4"> Site Menu </h6>
              <p>
                <a href="/about" className="text-reset">
                  About us
                </a>
              </p>
              <p>
                <a href="/blog" className="text-reset">
                  The Blog
                </a>
              </p>
              <p>
                <a href="/case-studies" className="text-reset">
                  Our Projects
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Newsletter
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Data Policy
                </a>
              </p>
            </div>
            {/*0  2  */}
            <div className="col-md-3 col-lg-2 col-xl-5 mx-auto mb-4">
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4"> Reach Us </h6>
                <p>
                  <i className="fas fa-home me-3"></i> Edificio Sur, Moll de
                  Barcelona, S/N, 2nd floor, 08039 Barcelona, Spain{" "}
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  omyweb@mail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +34933443200{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Copyright OmYweb Interactive Agency © 2022:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Barcelona Web design + Digital Marketing Agency
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
