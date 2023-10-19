import { useParams } from "react-router-dom"
import "./SingleMusic.scss"
import { useEffect,useState } from "react"
import { SlArrowLeft,SlArrowRight,SlOptions } from "react-icons/sl"
import { FaPlay } from "react-icons/fa"
import { AiOutlineHeart,AiOutlineClockCircle,AiFillHeart } from "react-icons/ai"
import { CiSaveDown2 } from "react-icons/ci"
import { BiSearch } from "react-icons/bi"
import { RxTriangleDown } from "react-icons/rx"
import { useDispatch } from "react-redux"



const SingleMusic = () => {
  const dispatch = useDispatch()
  const id = useParams()
  const  [sideBarMusics,setSideBarMusics]=useState([])
  const [heart,setHeart]=useState(false)
    useEffect(()=>{
        fetch(`https://api.spotify.com/v1/playlists/${id.id} `,{
            headers:{
                "Authorization":localStorage.getItem("token"),
                'Content-Type': 'application/json'
            }
        })
            .then(response=>response.json())
            .then(data=>setSideBarMusics(data))
        
    },[id.id])
    console.log(sideBarMusics)
    const calculateTotalDuration = () => {
      if (sideBarMusics && sideBarMusics.tracks) {
        const totalDurationMs = sideBarMusics.tracks.items.reduce(
          (acc, track) => acc + track.track.duration_ms,
          0
        );
        const totalDurationHours = Math.floor(totalDurationMs / 3600000);
        const totalDurationMinutes = Math.floor((totalDurationMs % 3600000) / 60000);
        return { totalDurationHours, totalDurationMinutes };
      }
      return { totalDurationHours: 0, totalDurationMinutes: 0 };
    };
    function LikedMusic(item){
      dispatch({item,type:"LIKE_MUSIC"})
    }
  
    const totalDuration = calculateTotalDuration();
  return (
    <div className="singleMap">
        <div className='section1'>
            <div><SlArrowLeft/></div>
            <div><SlArrowRight/></div>
        </div>
        <div className="playlist">
          <img src={sideBarMusics?.images?.[0]?.url} alt="" />
          <div className="titles">
            <span>{sideBarMusics?.public==true?"PUBLIC PLAYLIST":"NOT PUBLIC PLAYLIST"}</span>
            <h3>{sideBarMusics?.name}</h3>
            <p>{sideBarMusics?.description}</p>
            <h4>Made for <span>{sideBarMusics.owner?.display_name}</span> ● {sideBarMusics.tracks?.total} songs,{totalDuration.totalDurationHours} hours {totalDuration.totalDurationMinutes} min</h4>
          </div>
        </div>
        <div className="section3Salom">
          <div className="bil">
            <div className="playButton">
              <FaPlay/>
            </div>
            <AiOutlineHeart style={{fontSize:'40px',color:"#fff"}}/>
            <CiSaveDown2 style={{fontSize:'40px',color:"#fff"}}/>
            <SlOptions style={{fontSize:'40px',color:"#fff"}}/>
          </div>
          <div className="bilma">
            <BiSearch style={{fontSize:'30px',color:"#fff"}}/>
            <dir className="select"><p>Custom order</p><RxTriangleDown/></dir>
          </div>
        </div>
        <div className="sectionNames">
          <p>#</p>
          <p style={{marginLeft:"20px"}}>TITLE</p>
          <p style={{marginLeft:"300px"}}>ALBUM</p>
          <p style={{marginLeft:"335px"}}><AiOutlineClockCircle/></p>
        </div>
        <div className="musicsFetch">
          {
            sideBarMusics?.tracks?.items?.map((item,ind)=>
              <div className="biladm2x">
                <p>{ind+1}</p>
                <img src={item.track.album.images[0].url} alt="" />
                <p className="faxa" style={{marginLeft:"20px"}}>{item.track.name}<br/>{item.track.artists[0].name}</p>
                <p className="birNarsa">{item.track.album.name}</p>
                <div style={{marginLeft:"150px"}}><AiFillHeart style={{color:"green",fontSize:"20px",marginRight:"34px"}} onClick={()=>LikedMusic(item)}/></div>
                <p style={{color:"#fff",fontFamily:"sans-serif"}}>{Math.floor(item.track.duration_ms / 60000).toString() + ":" + Math.floor(item.track.duration_ms / 60000).toString().padStart(2, "0")}</p>
              </div>  
            )
          }
        </div>
    </div>
  )
}

export default SingleMusic