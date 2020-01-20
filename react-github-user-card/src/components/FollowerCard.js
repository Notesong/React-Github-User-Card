import React from 'react';

const FollowerCard = ({ follower }) => {
    return (
        <div className="follower-card">
            <p>{follower.login}: <a href={follower.html_url}>{follower.html_url}</a></p>
        </div>
    )
};

export default FollowerCard;