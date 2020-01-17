import React, { useState, useEffect } from 'react'
import './../../styles/sidebar.sass'

const Sidebar = () => {
    
    const [github_username, setGithubUserName] = useState('')
    const [techs, setTechs] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords

                setLatitude(latitude)
                setLongitude(longitude)
            }, 
            err => {
                console.log(err)
            },{
                timeout: 30000
            }
        )
    },[])

    return (
        <>
            <strong>Cadastrar</strong>
            <form>
                <div className='input-block'>
                    <input
                        name='github_username'
                        id='github_username'
                        value={github_username}
                        onChange={ e => setGithubUserName(e.target.value) }
                        required
                    />
                    <label htmlFor='github_username'>Usuário do Github</label>
                </div>

                <div className='input-block'>
                    <input 
                        name='techs' 
                        id='techs' 
                        value={techs}
                        onChange={ e => setTechs(e.target.value) }
                        required
                    />
                    <label htmlFor='techs'> Tecnologias </label>
                </div>

                <div className='input-group'>

                    <div className='input-block'>
                        <input 
                            type='number' 
                            name='latitude' 
                            id='latitude' 
                            required 
                            value={latitude}
                            onChange={ e => setLatitude(e.target.value) } 
                        />
                        <label htmlFor='latitude'> Latitude </label>
                    </div>

                    <div className='input-block'>
                        <input 
                            type='number' 
                            name='longitude'
                            id='longitude' 
                            required 
                            value={longitude}
                            onChange={ e => setLongitude(e.target.value) } 
                        />
                        <label htmlFor='longitude'> Longitude </label>
                    </div>

                </div>

                <button type="submit">Salvar</button>
            </form>
        </>
    )
}

export default Sidebar