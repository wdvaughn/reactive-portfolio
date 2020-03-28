import React from "react";

function About() {
  return (
    <section className="container p-3">
      <h1>About Me</h1>
      <div className="content clearfix">
        <img src="/images/will-photo-s.jpg" alt="William Vaughn" height="200px" className="p-3 clearfix" />
        <p className="p-3">My name is William Vaughn. I am a NC state graduate with a bachelor's degree in mathematics
            and a minor in computer programming. I am working on developing a portfolio as part of a coding bootcamp.
        </p>
      </div>
    </section>
  );
}

export default About;