// Write your code here
import './index.css'

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {search: ''}
  onType = event => {
    this.setState({search: event.target.value})
  }
  render() {
    const {destinationsList} = this.props
    const {search} = this.state
    const finalList = destinationsList.filter(each =>
      each.name.toLowerCase().includes(search),
    )
    return (
      <div className="bg">
        <h1>Destination Search</h1>
        <div className="card">
          <input
            type="search"
            onChange={this.onType}
            placeholder="Search"
            value={search}
            className="ipt"
          />
          <span className="spa">
            <img
              className="ima"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </span>
        </div>
        <ul className="grp">
          {finalList.map(each => (
            <DestinationItem details={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
