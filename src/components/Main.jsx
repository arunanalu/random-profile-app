import React from 'react'
import { connect } from 'react-redux'
import { getFetchUser, getName } from '../redux/actions'

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
      <div>
        <h2>Random profile generator</h2>
        <label htmlFor="input">
          Enter a name:
          <input type="text" id="input" value={ input } onChange={this.handleChange}/>
        </label>
        <button disabled={ !disable } onClick={this.submiteButton}>Create</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getName: (name) => dispatch(getName(name)),
  getUser: () => dispatch(getFetchUser()),
})

export default connect(null, mapDispatchToProps)(Main)