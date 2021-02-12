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
            <header className="main-nav-container">
                <div className="main-nav">
                    <div className="main-nav__left">
                        <Link to="/">
                            <span className="logo" href="#">
                            </span>
                        </Link>
                    </div>
                    <div className="searchbar-container">
                        <input className="searchbar" 
                        type="text" 
                        placeholder="Search..."
                        value={this.state.search} 
                        onChange={this.updateSearch}>
                        </input>
                    </div>
                    {!this.props.signedIn ? (
                            <div className="nav-right">
                                <div className="nav-right__loginbtn">
                                    <Link to="signin" >Sign in</Link>
                                </div>
                                <div className="nav-right__signupbtn">
                                    <Link to="signup" >Sign up</Link>
                                </div>   
                            </div>
                        ) : (
                            <div className="nav-right">
                                <button onClick={this.props.signout}>Sign out</button>
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
