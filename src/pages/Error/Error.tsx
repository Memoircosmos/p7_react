import React from "react"
import { Link } from "react-router-dom"
import "./Error.scss"


export const Error: React.FC = () => {
    return (
        <div className="mainDiv">
            <h1>404</h1>
            <p>Oups, la page que vous demandez n'existe pas</p>
            <Link to={{ pathname: "/" }} >Retourner sur la page d'Accueil
            </Link>
        </div>
    )
}