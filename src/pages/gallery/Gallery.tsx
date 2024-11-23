import React from "react";
import mainBanner from "../../assets/images/accueil.png";
import cardsDatas from "../../data/logement.json";
import { Link } from "react-router-dom";
import "./Gallery.scss"

export interface CardImage {
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    description: string;
    host: {
        name: string;
        picture: string;
    };
    rating: string;
    location: string;
    equipments: string[];
    tags: string[];
}

export const Gallery: React.FC = () => {
    return (
        <div className="Gallery">
            <div className="mainBanner">
                <img src={mainBanner} alt="bannière site" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="cards-container">
                {cardsDatas.map((cardData: CardImage) => (
                    <Link key={cardData.id} to={{ pathname: `card/${cardData.id}` }}>
                        <div className="card">
                            <img src={cardData.cover} alt="cover" />
                            <h2>{cardData.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
