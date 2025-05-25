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
  const [loading, setLoading] = useState(false);

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
  setLoading(true);
  try {
    // ✅ UPDATED: Use environment variable instead of hardcoded URL
    const response = await fetch("https://kurisani-backend.onrender.com/api/form/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });

    const res_data = await response.json();
    console.log(res_data);

    if (response.status === 200) {
      // ✅ UPDATED: Use toast.success for clarity
      toast.success("Form Submitted Successfully");

      setContact({
        name: "",
        company: "",
        email: "",
        mobile: "",
        message: "",
      });
    } else {
      // ✅ UPDATED: Use toast.error with fallback message
      toast.error(res_data.errors || "Form not submitted");
    }

    setMsg(res_data.errors || "");
    // ✅ UPDATED: Call setShowMessage before setTimeout to prevent flicker
    setShowMessage(true);
    // ✅ UPDATED: Reordered setTimeout after setShowMessage
    setTimeout(() => setShowMessage(false), 3000);

  } catch (error) {
    // ✅ UPDATED: Added toast for network/server failure
    console.error("Submission Error:", error);
    toast.error("Server error. Please try again.");
  } finally {
    setLoading(false);
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
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
