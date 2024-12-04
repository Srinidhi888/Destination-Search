// Write your code here
import './index.css'

const DestinationItem = props => {
  const {details} = props
  const {name, imgUrl} = details
  return (
    <li className="arg">
      <img className="imag" src={imgUrl} alt={name} />
      <p className="head1">{name}</p>
    </li>
  )
}

export default DestinationItem
