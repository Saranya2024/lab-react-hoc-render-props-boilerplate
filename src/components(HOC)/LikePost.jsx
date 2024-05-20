import React, { useState } from 'react';

const withLikeCount = (WrappedComponent) => {
  return function WithLikeCount(props) {
    const [likeCount, setLikeCount] = useState(0);

    const handleLike = () => {
      setLikeCount(likeCount + 1);
    };

    return <WrappedComponent {...props} likeCount={likeCount} handleLike={handleLike} />;
  };
};

function LikeButton({ text, likeCount, handleLike }) {
  return (
    <div>
      <button onClick={handleLike}>Like Post {text} {likeCount}</button>
    </div>
  );
}

const LikePost = withLikeCount(LikeButton);

export default LikePost;
