import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "PHP", xp: 3},
            {id: 2, value: "HTML", xp: 3},
            {id: 3, value: "CSS", xp: 3},
            {id: 4, value: "Javascript", xp: 2.2},
            {id: 5, value: "SQL", xp: 3}
        ],
        frameworks: [
            {id: 1, value: "Symfony", xp: 2.5},
            {id: 2, value: "React", xp: 0.7},
            {id: 3, value: "Bootstrap", xp: 3},
            {id: 4, value: "Sass", xp: 3}
        ]
    }
    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="Langages"
                />
                <ProgressBar
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="Frameworks & bibiliothèques"
                />
            </div>
        );
    }
}

export default Languages;