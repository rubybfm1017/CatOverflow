import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'; 
import { signout } from '../../actions/user_actions';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.updateSearch = this.updateSearch.bind(this);
        this.state = {
            search: ''
        }
    }

    updateSearch(e) {
        this.setState({ search: e.target.value.substr(0, 50) });
    }
    
    render() {
        return (
            <header className="nav-container">
                <div className="nav">
                    <div className="nav__left">
                        <Link to="/">
                            <span className="logo" href="#">
                            </span>
                        </Link>
                    </div>
                    <div className="nav__searchbar">
                        <input className="nav__searchbar__container__input" 
                        type="text" 
                        placeholder="Search..."
                        value={this.state.search} 
                        onChange={this.updateSearch}>
                        </input>
                    </div>
                    {!this.props.signedIn ? (
                            <div className="nav__right" style={{display: 'flex', marginInline: '50px' }}>
                                <div className="nav__right__loginbtn">
                                    <Link to="signin" >Sign in</Link>
                                </div>
                                <div className="nav__right__signupbtn">
                                    <Link to="signup" >Sign up</Link>
                                </div>   
                            </div>
                        ) : (
                            <div className="nav__right">
                                <button className="nav__right__logoutbtn" style={{marginInline: '50px'}} onClick={this.props.signout}>Sign out</button>
                                <span>{this.props.currentUser.username}</span>
                            </div>
                        )
                    }
                    </div>
            </header>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.users.current_user,
        signedIn: Boolean(state.users.current_user ? state.users.current_user.id != null : false)
    };
}; 

const mapDispatchToProps = dispatch => {
    return {
        signout: () => dispatch(signout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
