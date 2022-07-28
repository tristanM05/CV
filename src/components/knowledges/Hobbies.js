import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-robot"></i>
                    <span>Technologie</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-atom"></i>
                    <span>Science</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-video"></i>
                    <span>Audio visuel</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-guitar"></i>
                    <span>Musique</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;