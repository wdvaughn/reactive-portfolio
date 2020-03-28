import React from "react";
import Card from "../components/Card";

function Portfolio() {
  return (
    <section className="container">
      <h1>Portfolio</h1>
      <div className="content clearfix">
        <Card href="https://wdvaughn.github.io/password-generator/" image="https://via.placeholder.com/200" alt="filler" title="Password Generator" />

        <Card href="https://wdvaughn.github.io/code-quiz/" image="https://via.placeholder.com/200" alt="filler" title="Code Quiz" />

        <Card href="https://wdvaughn.github.io/day-planner/" image="https://via.placeholder.com/200" alt="filler" title="Day Planner" />

        <Card href="https://wdvaughn.github.io/weather-api/" image="https://via.placeholder.com/200" alt="filler" title="Weather API" />

        <Card href="https://wdvaughn.github.io/node-profile-generator/index.html" image="https://via.placeholder.com/200" alt="filler" title="Developer Profile Generator" />

        <Card href="https://serene-eyrie-74606.herokuapp.com/" image="https://via.placeholder.com/200" alt="filler" title="Note Taker" />

        <Card href="https://frozen-ocean-30927.herokuapp.com/" image="https://via.placeholder.com/200" alt="filler" title="Burger" />

        <Card href="https://thawing-taiga-84237.herokuapp.com/?id=5e7d5842e6a7bd0017562d82" image="https://via.placeholder.com/200" alt="filler" title="Fitness Tracker" />

        <Card href="https://pacific-depths-50534.herokuapp.com/" image="https://via.placeholder.com/200" alt="filler" title="User Directory" />
      </div>
    </section>
  );
}

export default Portfolio; 