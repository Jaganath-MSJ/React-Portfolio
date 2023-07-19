import React, {Component} from "react";
import './style/Home.css';
import { Data } from "../Data/data";

class Home extends Component {
    render() {
        return (
            <section class="home" id="Home">
                <div>
                    <h3>Hey! I am</h3>
                    <h1>{Data.Home.name}</h1>
                    <h2>I am {Data.Home.role}.</h2>
                </div>
            </section>
        )
    }
}

export default Home;