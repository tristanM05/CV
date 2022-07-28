import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/tristan.png" alt="profil-pic"/>
                    <h3>Tristan Marest</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/tristan-marest-33835290/" target="blank" rel="noopenner noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://www.tristanmarest.com" target="blank" rel="noopenner noreferrer"><i className="fas fa-globe"></i></a>
                    </li>
                    <li>
                        <a href="https://wwww.google.com" target="blank" rel="noopenner noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Réaliser avec la technologie React</p>
                    <p> <i className="fab fa-react"></i></p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;