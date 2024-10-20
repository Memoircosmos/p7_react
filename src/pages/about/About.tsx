import React from "react";
import "./About.scss";
import aboutBanner from "../../assets/images/a-propos.png";
import aboutContent from "../../data/string.json";
import { Collapse } from "../../components/collapse/Collapse";

export const About:React.FC = () => {
    return (
        <div className="About">
            <div className="aboutBanner">
                <img src={aboutBanner} alt="bannière"/>
            </div>
            <div className="content">
                {Object.entries(aboutContent).map(([title,content])=>(
                    <Collapse title={title} content={content} key={title}/>
                ))}
            </div>

        </div>
    )
}