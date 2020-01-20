import React from 'react';
import FollowerCard from './FollowerCard';

const Followers = ({ followerData }) => {
    return (
        <div className="followers">
                <h3>Followers</h3>
                {followerData.map(follower => {
                   return <FollowerCard key={follower.id} follower={follower} />
                })}   
        </div>
    )
};

export default Followers;