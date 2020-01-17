import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Card from './components/Card/Card'
import api from './services/api'

import './styles/global.sass'
import './styles/app.sass'

function App() {

    const [devs, setDevs] = useState([])

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('/devs')

            setDevs(response.data)
        }

        loadDevs()
    }, [])

    async function handleAddDev(data){
        const response = await api.post('/devs', data)      
        setDevs([ ...devs, response.data ])
    }

    return (
		<div id='app'>
			<aside>
                <Sidebar onSubmit={ handleAddDev } />
			</aside>
        <main>
            { devs.map( dev => (
            <Card 
                key={ dev._id }
                img={ dev.avatar_url }
                name={ dev.name }
                techs={ dev.techs.join(', ')}
                bio={ dev.bio }
                github={ dev.github_username }
            />
            ))}
        </main>
    </div>
  )
}

export default App;
