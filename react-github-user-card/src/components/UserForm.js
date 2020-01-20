import React from 'react';

class UserForm extends React.Component {

    // sets up an empty new user state
    state = {
        newUser: ''
    };

    // handles any input changes in the form
    handleChanges = e => {
        this.setState({...this.state, newUser: e.target.value});
    };

    // sets the new user to state found in App.js
    // resets the input field
    handleSubmit = e => {
        e.preventDefault();
        this.props.changeUser(this.state.newUser);
        this.setState({...this.state, newUser: ''});
    };

    render() {
        return(
            <div className='form-user'>
                {/* new user form */}
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='task'
                        value={this.state.newUser}
                        maxLength='30'
                    />
                    <button className='btn'>Find</button>                    
                </form>
            </div>
        )
    }
}

export default UserForm;