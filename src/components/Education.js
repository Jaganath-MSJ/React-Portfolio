import React, { Component } from "react";

import EachEducation from "./EachEducation";
import { educationLists } from './EducationList';
import { isArrayEmpty } from "./Utlis";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import './style/Education.css';

class Education extends Component {
    educationList = educationLists

    render() {
        const education = isArrayEmpty(this.educationList) ? [] : this.educationList.map((item) => {
            return (
                <EachEducation degree={item.degree} college={item.college} year={item.year} isCompleted={item.isCompleted} />
            )
        })

        return (
            <section class="education" id="Education">
                <h1><FontAwesomeIcon icon={faGraduationCap} /> Education</h1>
                <div>
                    {education}
                </div>
            </section>
        )
    }
}

export default Education;