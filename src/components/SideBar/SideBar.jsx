import "./SideBar.scss"
import { AiFillHome,AiOutlineSearch,AiFillPlusSquare } from "react-icons/ai"
import { LuFileStack } from "react-icons/lu"
import { Link } from "react-router-dom"
import LikedSongs from "../../assets/LikedSongs.svg"
import { useEffect,useState } from "react"

const SideBar = () => {
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
        <div className="sideBar">
            <div className="Sidebar__Sections">
                <ul className="sideBarTitles">
                    <li>
                        <AiFillHome/>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="boshqacha">
                        <AiOutlineSearch/>
                        <Link to="#">Search</Link>
                    </li>
                    <li className="boshqacha">
                        <LuFileStack/>
                        <Link to="#">Your Liblary</Link>
                    </li>
                    <li className="boshqacha2 boshqacha">
                        <AiFillPlusSquare/>
                        <Link to="#">Create Playlist</Link>
                    </li>
                    <li>
                        <img style={{width:"26px",height:"25px",marginLeft:"3px"}} src={LikedSongs} alt="" />
                        <Link to="/likedmusics">Liked Songs</Link>
                    </li>
                </ul>
            </div>
            <div className="musics">
                <ul>
                    {
                        sideBarMusics.map(music=>
                            <li><Link to={`/singlemusic/${music.id}`}>{music.name}</Link></li>   
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default SideBar