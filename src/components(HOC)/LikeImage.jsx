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
      <button onClick={handleLike}>Like Image {text} {likeCount}</button>
    </div>
  );
}

const LikeImage = withLikeCount(LikeButton);

export default LikeImage;