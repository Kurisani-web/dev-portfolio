import React, { useState } from "react";
import { toast } from "react-toastify";
export default function Contact() {
  const [contact, setContact] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [msg, setMsg] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("https://kurisani-backend.onrender.com/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      const res_data = await response.json();
      console.log(res_data);
      toast(res_data.errors);
      if (response.status === 200) {
        // display toast notification with success message
        console.log("form submitted");
        toast("Form Submitted Successfully");
        setContact({
          name: "",
          company: "",
          email: "",
          mobile: "",
          message: "",
        });
        setMsg(res_data.errors);
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
        setShowMessage(true);
      } else {
        setMsg(res_data.errors);
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
        setShowMessage(true);
        toast("Form Not submitted");
      }
    } catch (error) {
      // const errorObject = error.errors;
      // const errormessage = errorObject.map((detail) => errorObject.message);
      // setError(error);
      console.error(error);
      // console.log(errors);
    }
  };

  return (
    <div className="contact-section">
      <div className="header">
        <span>Contact With Me</span>
        <h2>Have a Project in Mind?</h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          fugiat aliquam enim expedita? Quibusdam expedita ea eligendi
          consequuntur, quaerat sit?
        </p>
      </div>
      <div className="errorContainer">
        {showMessage && <p className="errorMsg">{msg}</p>}
      </div>
      <div className="form-container">
        <form action="" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-field">
              <input
                type="text"
                value={contact.name}
                onChange={handleInput}
                id="name"
                name="name"
                placeholder="Enter your Name"
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                value={contact.company}
                onChange={handleInput}
                name="company"
                id="company"
                className="company"
                placeholder="Company(Optional)"
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <input
                type="email"
                value={contact.email}
                onChange={handleInput}
                name="email"
                id="email"
                placeholder="Enter your Email"
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                value={contact.mobile}
                onChange={handleInput}
                name="mobile"
                id="mobile"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <textarea
            name="message"
            value={contact.message}
            onChange={handleInput}
            id="message"
            rows="4"
            cols="50"
            placeholder="Tell me about your project..."
          ></textarea>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
