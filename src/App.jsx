import './App.css';
// import LikeImage from './components(HOC)/LikeImage';
// import LikePost from './components(HOC)/LikePost';
import LikeImage from './components(Render props)/LikeImage';
import LikePost from './components(Render props)/LikePost';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
    </div>
  );
}

export default App;