import './HomeSection3.scss'
import { useEffect,useState } from "react"
import { Link } from 'react-router-dom'

const HomeSection4 = () => {
    const  [sideBarMusics,setSideBarMusics]=useState([])
    useEffect(()=>{
        fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists",{
            headers:{
                "Authorization":localStorage.getItem("token"),
                'Content-Type': 'application/json'
            }
        })
            .then(response=>response.json())
            .then(data=>setSideBarMusics(data.playlists.items))        
    },[])
    return (
        <div className='HomeSection3'>
            <h2>Made for you</h2>
            <div className='sectionMusic'>
                {
                    sideBarMusics.slice(0,4).map(item=>
                        <div className="musics">
                            <Link to={`/singlemusic/${item.id}`}><img src={item.images[0].url} alt="" /></Link>
                            <p>{item.name}</p>
                            <span>{item.description}</span>
                        </div>   
                    )
                }
            </div>
        </div>
    )
}

export default HomeSection4