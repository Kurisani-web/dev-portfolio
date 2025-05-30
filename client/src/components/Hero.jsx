import React from "react";
import { Typewriter } from "react-simple-typewriter";
import heroImg from "../images/hero.png";
export default function Hero() {
  return (
    <div className="hero-section">
      <div className="content">
        <span>Hey There 👋 I am</span>
        <h1>Kurisani Maluleke</h1>
        <h3>
          I'm a{" "}
          <span style={{ color: "blue", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "Frontend Developer",
                "Backend Developer",
                "Full Stack Developer",
                "UI/UX Designer",
                "React Developer",
                "Node.js Developer",
                "Software Engineer",
                "MERN Developer",
                "Web Developer!",
                "App Developer!",
                "Web Designer!",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>
        <div className="btn-group">
          <button
  className="btn btn-primary"
  onClick={() =>
    window.open("https://wa.me/27606031205", "_blank", "noopener,noreferrer")
  }
>
  WhatsApp
</button>
          <button
  className="btn btn-black"
  onClick={() => window.open("tel:0606031205")}
>
   Tap to Call
</button>
        </div>
      </div>
      <div className="img">
        <img src={heroImg} alt="" />
      </div>
      <div className="circle"></div>
      <div className="circle2"></div>
    </div>
  );
}
