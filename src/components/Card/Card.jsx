import React from 'react'

import './../../styles/card.sass'

const Card = ({ img, name, techs, bio, github }) => {
    return (
        <div className="main">
            <ul>
                <li className="dev-item">
                    <header>
                        <img src={img} alt={name}/>
                        <div className="user-info">
                            <strong> {name} </strong>
                            <span> {techs} </span>
                        </div>
                    </header>
                    <p>{bio}</p>
                    <a href={`https://github.com/${github}`}>Acessar o perfil no Github</a>
                </li>
            </ul>
        </div>
    )
}

export default Card