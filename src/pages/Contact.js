import React from "react";

function Contact() {
  return (
    <section className="container mx-3">
      <h1 > Contact</h1>
      <div className="content">
        <div>
          <label for="name">Name</label>
          <input type="text" name="name" value="William Vaughn" readonly />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="text" name="email" value="will.d.vaughn@gmail.com" readonly />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea type="text" name="message" rows="5" cols="40"></textarea>
        </div>
        <button type="submit">Submit</button>
      </div>
    </section>
  );
}

export default Contact;