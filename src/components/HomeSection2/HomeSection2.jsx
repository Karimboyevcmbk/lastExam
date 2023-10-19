import "./HomeSection2.scss"
import { LuFileStack } from "react-icons/lu"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom"

const HomeSection2 = () => {
    const  [sideBarMusics,setSideBarMusics]=useState([])
    useEffect(()=>{
        fetch("https://api.spotify.com/v1/browse/categories/toplists/playlists",{
            headers:{
                "Authorization":localStorage.getItem("token"),
                'Content-Type': 'application/json'
            }
        })
            .then(response=>response.json())
            .then(data=>setSideBarMusics(data.playlists.items))        
    },[])
    return (
        <div className="Home__section2">
            {
                sideBarMusics.slice(0,6).map(item=>
                    <Link style={{textDecoration:"none"}} to={`/singlemusic/${item.id}`}>
                        <div className="heroItems">
                            <img src={item.images[0].url} alt="" />
                            <p>{item.name}</p>
                        </div> 
                    </Link>  
                )
            }
        </div>
    )
}

export default HomeSection2