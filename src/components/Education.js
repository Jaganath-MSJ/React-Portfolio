import React, { Component } from "react";

import EachEducation from "./EachEducation";
import { Data } from "../Data/data";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import './style/Education.css';

class Education extends Component {
    render() {
        return (
            <section class="education" id="Education">
                <h1><FontAwesomeIcon icon={faGraduationCap} /> Education</h1>
                <div>
                    {Data.Education.map((education) => {
                        return <EachEducation education={education} />
                    })}
                </div>
            </section>
        )
    }
}

export default Education;