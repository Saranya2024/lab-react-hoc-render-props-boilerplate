import React, { useState } from 'react';

function LikeCounter({ children }) {
  const [likeCounter, setLikeCounter] = useState(0);

  const handleLikeCount = () => {
    setLikeCounter(likeCounter + 1);
  };

  return children(likeCounter, handleLikeCount);
}

export default function LikeImage() {
  return (
    <LikeCounter>
      {(likeCounter, handleLikeCount) => (
        <div>
          <button onClick={handleLikeCount}>Like Image {likeCounter}</button>
        </div>
      )}
    </LikeCounter>
  );
}
