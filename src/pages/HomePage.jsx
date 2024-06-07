import React from 'react'
import InitPart from "../components/InitPart";
import Fight from "../components/Fight";
import About from "../components/About";
import Colorcode from "../components/Colorcode";
import Degree from "../components/Degree";
import Guide from '../components/Guide';

const HomePage = () => {
    return (
        <div>
            <InitPart />
            <About />
            <Degree />
            <Colorcode />
            <Fight />
            <Guide />
        </div>
    )
}

export default HomePage