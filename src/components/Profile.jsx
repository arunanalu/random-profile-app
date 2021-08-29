import React from 'react'
import { connect } from 'react-redux'
import '../css/profile.css'

class Profile extends React.Component {

  backButton = () => {
    const { history } = this.props;
    history.push("/")
  }

  render() {
    const { name, user, loading } = this.props;

    if (loading) return <div className="loading"><p>loading</p></div>

    return(
      <div>
        <h2>PROFILE</h2>
        <div className="profile-section">
          <p className="name">{ `${name} ${user.name.last}, ${user.dob.age}` }</p>
          <div className="profile-info">
            <img src={ user.picture.large } alt="people"/>
            <div className="bar" />
            <div className="profile-details">
              <p>{`Contry: ${user.location.country}, ${user.location.state}`}</p>
              <p>{`Email: ${user.email}`}</p>
              <p>{`Cell phone: ${user.cell}`}</p>
              <button onClick={ this.backButton }>Voltar</button>
            </div>
          </div>
          <div className="control" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.reducerProfile.name,
  user: state.reducerProfile.user,
  loading: state.reducerProfile.isLoading,
})

export default connect(mapStateToProps)(Profile)
