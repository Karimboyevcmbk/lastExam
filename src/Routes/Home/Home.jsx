import HomeSection2 from '../../components/HomeSection2/HomeSection2'
import HomeSection3 from '../../components/HomeSection3/HomeSection3'
import HomeSection4 from '../../components/HomeSection3/HomeSection4'
import HomeSection5 from '../../components/HomeSection3/HomeSection5'
import HomeSection6 from '../../components/HomeSection3/HomeSection6'
import HomeSection7 from '../../components/HomeSection3/HomeSection7'
import './Home.scss'
import { SlArrowLeft,SlArrowRight } from "react-icons/sl"

const Home = () => {
  return (
    <div className='Home'>
        <div className='section1'>
            <div><SlArrowLeft/></div>
            <div><SlArrowRight/></div>
        </div>
        <h1>Good afternoon</h1>
        <HomeSection2/>
        <HomeSection3/>
        <HomeSection4/>
        <HomeSection5/>
        <HomeSection6/>
        <HomeSection7/>
    </div>
  )
}

export default Home