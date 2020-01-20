import React from 'react';

const FollowerCard = ({ follower }) => {
    return (
        <div className="follower-card">
            <h4>{follower.login}: <a href={follower.html_url}>{follower.html_url}</a></h4>
        </div>
    )
};

export default FollowerCard;