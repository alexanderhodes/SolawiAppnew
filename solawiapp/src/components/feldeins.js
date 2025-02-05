import React from 'react'
import "./einzelnesfeld.css";
import { Link } from "react-router-dom";

const Feldeins = () => {
  return (

    <>
      <Link className="verlinkung" to="/">ZUR FELDÜBERSICHT</Link>

        <div className="container">
            <div className="reihe">1a</div>
            <div className="reihe">1b</div>
            <div className="reihe">1c</div>
            <div className="reihe">1d</div>
            <div className="reihe">1e</div>
            <div className="reihe">1f</div>
            <div className="reihe">1g</div>
            <div className="reihe">1h</div>
            <div className="reihe">1i</div>
            <div className="reihe">1j</div>
        </div>
    </>
  )
};

export default Feldeins;