// import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import "./Contact.css";

const Contact = () => {
  const [user , setUser] = useState({firstname: "", lastname: "", email: "", newsletter: false , comment:""})
  return (
    <>
      <h1 className="contact-h1">Drop Us a Mail</h1>
      <main className="contact-page">
        <section className="map-sec">
          <iframe
            title="barcelona"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.1245792788886!2d2.1817056999999997!3d41.371378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a25269f7610d%3A0x28e543af9d526b11!2sRegus%20-%20Barcelona%20World%20Trade%20Centre!5e0!3m2!1sen!2sde!4v1654886672851!5m2!1sen!2sde"
            style={{
              minWidth: "50%",
              height: "",
              border: 0,
              marginBottom: "20px",
            }}
            aria-hidden="false"
            tabIndex="0"
            allowFullScreen="true"
          />
          <section className="address-sec">
            <p>
              Edificio Sur, Moll de Barcelona, S/N, 2nd floor, 08039 Barcelona,
              Spain
            </p>
            <p>
              <span class="collig">Phone :</span> +34 933 44 32 00
            </p>
            <p>
              <span class="collig">Email :</span> omyweb@mail.com
            </p>
          </section>
        </section>
        <Form >
          <h3 class="sec2frmtitle">Want to Know More? Drop Us a Mail</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter FirstName" value={user.firstname} onChange={(e) => {console.log(user); setUser({...user,firstname: e.target.value}) }}/>
            <Form.Text className="text-muted">
              Keep in mind everyone is special.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter LastName" value={user.lastname} onChange={(e) => {console.log(user); setUser({...user,lastname: e.target.value})}} />
            <Form.Text className="text-muted">
              Keep in mind everyone is special.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="name@example.com" value={user.email} onChange={(e) => {console.log(user); setUser({...user,email: e.target.value})}}/>
          </Form.Group>

          <FloatingLabel
            controlId="floatingTextarea2"
            label="Leave a comment here"
          >
            <Form.Control
              required
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              value={user.comment} onChange={(e) => {console.log(user); setUser({...user,comment: e.target.value})}}
            />
          </FloatingLabel>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Newsletter" />
          </Form.Group>

          <button className="rainbow" type="submit" onClick>
            Lets talk!
          </button>
        </Form>
      </main>
    </>
  );
};

export default Contact;
