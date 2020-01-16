import React from 'react'

import './../../styles/card.sass'

const Card = () => {
    return (
        <div className="main">
            <ul>
                <li className="dev-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/9387064?s=460&v=4" alt="Pedro Junior"/>
                        <div className="user-info">
                            <strong>Pedro K. R. Junior</strong>
                            <span>React, Angular, Node.JS, Java</span>
                        </div>
                    </header>
                    <p>Sou uma pessoa que ama aprender e passar conhecimento, adoro desenvolvimento e designer, e apaixonado e curioso por algoritmos bio inspirados. =)</p>
                    <a href="https://github.com/PedroKJunior">Acessar o perfil no Github</a>
                </li>
            </ul>
        </div>
    )
}

export default Card