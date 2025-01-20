import React from "react"; // Ajoutez cette ligne
import "./End.css";
import { Link } from "react-router-dom";
import legal from "../Pics/legal.webp";
import axo from "../Pics/axolotl2.webp";
import politic from "../Pics/politique.webp";

const End = () => {
  return (
    <>
      <div className="end">
        <div className="legal">
          <Link to="/Mentions-légales">
            <img src={legal} alt="mention légale" className="round-image4" />
          </Link>{" "}
          <p>Mentions légales</p>
        </div>
        <div className="copy">
          <Link to="/">
            <img src={axo} alt="logo" className="round-image5" />
          </Link>
          <p>Copyright © 2025 | The Cool Axolotl </p>
        </div>
        <div className="politique ">
          <Link to="/Politique-de-confidentialité">
            <img
              src={politic}
              alt="politique de confidentialité axolotl"
              className="round-image4"
            />
          </Link>
          <p>Politique de confidentialité</p>
        </div>
      </div>
    </>
  );
};
export default End;
