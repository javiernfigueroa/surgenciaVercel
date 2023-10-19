import { useNavigate } from 'react-router-dom'
import Back from '../../assets/Back.png'

const ButtonBack = () => {
  const navigate = useNavigate()

  return (
    <button className="btn-back p-0 m-0 btn btn-outline-light border-0" onClick={() => navigate(-1)}>
      <img src={Back} alt="back" className="back btn-back" />
    </button>
  )
}

export default ButtonBack
