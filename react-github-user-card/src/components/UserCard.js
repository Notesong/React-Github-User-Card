import React from 'react';

const UserCard = ({ userData }) => {
    return (
        <div className="user-card">
            <div className="main">
                {/* display the user's personal github info */}
                <div>
                    <img src={userData.avatar_url} alt={userData.login} />
                </div>
                <div>
                    <h2>{userData.login}</h2>
                    <h3><a href={userData.html_url}>{userData.html_url}</a></h3>
                </div>
            </div>
            {/* display the user's github chart */}
            <div className="github-chart">
                <img src={`http://ghchart.rshah.org/${userData.login}`} alt={`${userData.login}'s Github chart`} />
            </div>
        </div>
    )
};

export default UserCard;