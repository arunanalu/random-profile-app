import React from 'react'
import { connect } from 'react-redux'
import { getFetchUser, getName } from '../redux/actions'
import '../css/main.css'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      disabled: false,
    }
  }

  handleChange = ({ target : { value }}) => {
    const disable = value.length >= 4
    this.setState({
      input: value,
      disable,
    })
  }

  submiteButton = () => {
    const { history, getName, getUser } = this.props;
    const { input } = this.state;
    getName(input);
    getUser();
    history.push("/profile")
  }

  render() {
    const { input, disable } = this.state
    return(
      <div className="main-section">
        <h2>Random Profile Generator</h2>
        <div className="input-section">
          <label htmlFor="input">
            Enter a name:
            <input type="text" id="input" value={ input } onChange={this.handleChange}/>
          </label>
          <button disabled={ !disable } onClick={this.submiteButton}>Create</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getName: (name) => dispatch(getName(name)),
  getUser: () => dispatch(getFetchUser()),
})

export default connect(null, mapDispatchToProps)(Main)