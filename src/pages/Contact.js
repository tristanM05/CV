import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Thésée 41140</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0663552385">
                                <span className="clickInput" onClick={() => alert('Numéro de téléphone copié !')}>06.36.55.23.85</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="fas fas fa-envelope"></i>
                            <CopyToClipboard text="marest.tristan@gmail.com">
                                <span className="clickInput" onClick={() => alert('Adresse email copié !')}>marest.tristan@gmail.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork"> 
                    <ul>
                        <a href="https://www.linkedin.com/in/tristan-marest-33835290/" target="_blank" rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.tristanmarest.com" target="_blank" rel="noopener noreferrer">
                            <h4>Site web</h4>
                            <i className="fas fa-globe"></i>
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;