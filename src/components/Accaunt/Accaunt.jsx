import './Accaunt.scss'
import { AiOutlineClose,AiOutlineUserAdd } from "react-icons/ai"
import { BiUser } from "react-icons/bi"

const Accaunt = () => {
  return (
    <div className='accaunt'>
        <div className='acaunt__section1'>
            <p>Friend Activity</p>
            <div className='icons'>
                <AiOutlineUserAdd/>
                <AiOutlineClose/>
            </div>
        </div>
        <span>Let friends and followers on Spotify see what you’re listening to.</span>
        <div className='acaauntUser'>
            <div className='acaauntUser__section1'>
                <BiUser/>
                <div className='kok'></div>
            </div>
            <div className='acaauntUser__section2'>
                <div></div>
                <button></button>
                <div style={{width:"80px"}}></div>
            </div>
        </div>
        <div className='acaauntUser'>
            <div className='acaauntUser__section1'>
                <BiUser/>
                <div className='kok'></div>
            </div>
            <div className='acaauntUser__section2'>
                <div></div>
                <button></button>
                <div style={{width:"80px"}}></div>
            </div>
        </div>
        <div className='acaauntUser'>
            <div className='acaauntUser__section1'>
                <BiUser/>
                <div className='kok'></div>
            </div>
            <div className='acaauntUser__section2'>
                <div></div>
                <button></button>
                <div style={{width:"80px"}}></div>
            </div>
        </div>
        <p>Go to Settings > Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
        <button className='Settings'>SETTINGS</button>
    </div>
  )
}

export default Accaunt