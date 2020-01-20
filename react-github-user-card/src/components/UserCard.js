import React from 'react';

const UserCard = ({ userData }) => {
    return (
        <div className="user-card">
            <div className="main">
                <div>
                    <img src={userData.avatar_url} alt={userData.login} />
                </div>
                <div>
                    <h2>{userData.login}</h2>
                    <h3><a href={userData.html_url}>https://github.com/Notesong</a></h3>
                </div>
            </div>
            <div className="followers">
                <h3>Follwers</h3>
                <p></p>
            </div>     
        </div>
    )
};

export default UserCard;