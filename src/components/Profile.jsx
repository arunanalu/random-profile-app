import React from 'react'
import { connect } from 'react-redux'

class Profile extends React.Component {

  backButton = () => {
    const { history } = this.props;
    history.push("/")
  }

  render() {
    const { name, user, loading } = this.props;

    if (loading) return <p>loading</p>

    return(
      <>
        <h3>Profile</h3>
        <div>
          <p>{ `${name} ${user.name.last}, ${user.dob.age}` }</p>
          <div>
            <img src={ user.picture.large } alt="people"/>
            <div>
              <p>{`Contry: ${user.location.country}, ${user.location.state}`}</p>
              <p>{`Email: ${user.email}`}</p>
              <p>{`Cell phone: ${user.cell}`}</p>
              <button onClick={ this.backButton }>Voltar</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.reducerProfile.name,
  user: state.reducerProfile.user,
  loading: state.reducerProfile.isLoading,
})

export default connect(mapStateToProps)(Profile)
