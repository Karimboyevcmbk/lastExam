import "./LikedMusics.scss"
import { useSelector } from "react-redux"

const LikedMusics = () => {
  const likeReducer = useSelector(state=>state.likeReducer)
  console.log(likeReducer)
  return (
    <div>

    </div>
  )
}

export default LikedMusics