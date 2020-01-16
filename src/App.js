import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

import './styles/global.sass'
import './styles/app.sass'



function App() {
  return (
		<div id='app'>
			<aside>
        <Sidebar />
			</aside>
      <main>
        <Main />
      </main>
    </div>
  )
}

export default App;
