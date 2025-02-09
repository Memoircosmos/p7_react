import React from "react"
import cardsData from "../../data/logement.json";
import {useParams } from "react-router-dom";
import { CardImage } from "../gallery/Gallery";
import { Carousel } from "../../components/Carousel/Carousel";
import { Collapse } from "../../components/collapse/Collapse";
import "./CardsPage.scss"


export const CardsPage : React.FC = () => {
    const {id} = useParams()
    const dataGroup = cardsData.find((dt:CardImage) => dt.id === id)
    
    if(!dataGroup) return <p>Le logement avec cette id n'existe pas.</p> 
    return (
        <div className="CardsPage">
            <Carousel id={id} />
            <div className="info">
            <div className='sec12'>
                        <div className='info-section info-section1'>

                            <div className='title-and-loc'>
                                <h2>{dataGroup.title}</h2>
                                <p>{dataGroup.location}</p>
                            </div>
                            <div className='tags'>
                                {dataGroup.tags.map((tag, index) => (
                                    <p key={index}>{tag}</p>
                                ))}
                            </div>
                        </div>

                        <div className='info-section info-section2'>
                            <div className='account-info'>
                                <p>{dataGroup.host.name}</p>
                                <img src={dataGroup.host.picture} alt="pp" />
                            </div>
                            <div className='stars-rating'>
                                {Array.from({ length: 5 }, (_, index) => (
                                    
                                    <i
                                        key={index}
                                        className={`fa-solid fa-star ${index < +dataGroup.rating ? 'active-star' : 'disabled-star'}`} 
                                    > 
                                    </i>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='info-section info-section3'>
                        <Collapse
                            title="Description"
                            content={dataGroup.description}
                        />
                        <Collapse
                            title="Équipement"
                            content={dataGroup.equipments.map((equipment, index) => (<span key={index}>{equipment}</span>))}
                        />
                    </div>
            </div>
        </div>
    )
}