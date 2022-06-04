import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import './Dashboard.css';

class Dashboard3 extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (

      <div className=''>

        <nav class="navbar b">
          <div class="container">
            <form class="d-flex nav1 " role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}></input>
              &nbsp;
              <button class="btn btn-outline-warning " type="submit">
                Search</button>
            </form>
            <a class="navbar-brand" href="#">
            </a>
          </div>
        </nav>
        <div>
          <center>
            <h1 className='backw1'>Panel Dashboard</h1>
          </center>
          <img className='backw' src='./system.jpg' />
          <img className='backwo' src='./system.jpg' />
          <nav class="navbar navbar-expand-lg  hn311 nav">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav hn32">
                  <li class="nav-item">
                    <button className="btn btn-success"><a href="/panelDashboard" style={{ textDecoration: 'none', color: 'white' }}>More Options</a> </button>
                  </li>
                 
                  {/* <li>
                    <button className="btn btn-success"><a href="/UH" style={{ textDecoration: 'none', color: 'white', }}>Users</a> </button>
                  </li> */}
                  &nbsp; &nbsp; &nbsp;
                  {/* <li>
                    <button className="btn btn-success"><a href="/viewpayment" style={{ textDecoration: 'none', color: 'white' }}>Payment Gateway</a> </button>
                  </li>
                  &nbsp; &nbsp; &nbsp;
                  <li>
                    <button className="btn btn-success"><a href="/viewmobilepayment" style={{ textDecoration: 'none', color: 'white' }}>Mobile Payment </a> </button>
                  </li> */}
                  &nbsp; &nbsp; &nbsp;
                  <li class="nav-item ">
                    <button
                      onClick={this.onLogoutClick}
                      className="btn btn-lg btn-warning "
                    >
                      Logout
                    </button>

                  </li>

                </ul>
              </div>
            </div>
          </nav>
          {/* <div className='mern1'>

<div className='row' style={{marginLeft:'20%', marginTop:'3%'}}>
<div class="card" style={{width:'20rem'}} >
<div class="card-body">
<i class='fas'><h4><b>&#xf044; Quick Links</b></h4></i>
<br/><br/>
<p> <a href="#">link</a></p>
<p> <a href="#">link</a></p>
<p> <a href="#">link</a></p>

</div>
</div>
<div class="card" style={{width:'20rem',marginLeft:'20%'}}>
<div class="card-body">
<i class='fas'><h4><b>&#xf044; Quick Links</b></h4></i>
<br/><br/>
<p> <a href="#">link</a></p>
<p> <a href="#">link</a></p>
</div>
</div>
</div> */}

   {/* </div> */}
  </div>
</div>
    );
  }
}

Dashboard3.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard3);
