import React from 'react';

const FollowerCard = ({ follower }) => {
    return (
        // displays the follower's info
        <div className="follower-card">
            <p>{follower.login}: <a href={follower.html_url}>{follower.html_url}</a></p>
        </div>
    )
};

export default FollowerCard;