import React, {Component} from "react";

import EachSkill from './EachSkill';
import {skillsLists} from "./SkillsList";
import {isArrayEmpty} from './Utlis';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import './style/Skills.css';

class Skills extends Component {
    skillsList = skillsLists

    render() {
        const skills = isArrayEmpty(this.skillsList) ? [] : this.skillsList.map((item) => {
            return (
                <EachSkill label={item.label} img={item.img} />
            )
        })
        
        return (
            <section class="skills" id="Skills">
                <h1><FontAwesomeIcon icon={faLaptopCode} /> Skills</h1>
                <div>
                    {skills}
                </div>
            </section>
        )
    }
}

export default Skills;