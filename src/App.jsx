import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='homepage'>
            <h1>Welcome to the Crewmate Creator!</h1>
            <h3>
                Here is where you can create your very own set of crewmates 
                before sending them off into space!
            </h3>
            <img 
                src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" 
                className='welcome-img'
            />
            <img 
                src="https://shimmering-stardust-c75334.netlify.app/assets/spaceship.3d8f767c.png" 
                className='welcome-img'
            />
        </div>
    )
}

export default App
