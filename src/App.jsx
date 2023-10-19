import './App.css'
import { Routes,Route } from 'react-router-dom'
import SideBar from './components/SideBar/SideBar'
import { useEffect } from 'react'
import Home from './Routes/Home/Home'
import Accaunt from './components/Accaunt/Accaunt'
import SingleMusic from './Routes/SingleMusic/SingleMusic'
import LikedMusics from './Routes/LikedMusics/LikedMusics'

function App() {
  const CLIENT_ID = '811255fa810b47d290b63b7d95514c67'
  const SECRET_ID = 'c86dd257a6104c33927049c56b6680be'

  useEffect(() => {
      const fetchData = async () => {
        const response =  await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + SECRET_ID)
          },
          body: 'grant_type=client_credentials'
        })
        const auth = await response.json()
        localStorage.setItem('token', `${auth.token_type} ${auth.access_token}`);
        setClientData(auth.access_token)
      }
      fetchData()
    }, [])
  return (
    <div className='container'>
      <SideBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/singlemusic/:id' element={<SingleMusic/>}/>
        <Route path='/likedmusics' element={<LikedMusics/>}/>
      </Routes>
      <Accaunt/>
    </div>
  )
}

export default App
