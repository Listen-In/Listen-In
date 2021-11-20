import React from "react";
import './blog.css'
import logo from '../images/logo.jpg';
<<<<<<< HEAD
import { useMediaQuery } from 'react-responsive'

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return <div>
  <h1>Device Test!</h1>
  {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
  {isBigScreen && <p>You  have a huge screen</p>}
  {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
  <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
  {isRetina && <p>You are retina</p>}
</div>
}

=======
import { Query } from 'react-apollo';
import GraphCMSContent from '../services/graphcms';
import Dashboard from "../views/Dashboard";
>>>>>>> ace31681c024ef2d56d48a31fea05ba195ec5f94

function Blog () {
  const [posts, setPosts] = React.useState([]);
  const [newPost, setNewPost] = React.useState({});
  const Client = new GraphCMSContent();

  const LoadingPostsJsx = () => (
    <div>
      Loading...
    </div>
  );
  const ErrorLoadingPostsJsx = () => (
    <div className="mx-auto alert-danger">
      Error!
    </div>
  );
  const createPost = async () => {
    const res = await Client.createPost(newPost);
    console.log(res);
    if (res !== false) alert("New Post Created Successfully!");
    else
      alert("An error occurred!");
  };

    return (
      <form action="action_page.php" method="post" onSubmit={ e => { e.preventDefault(); createPost(); } } >
          <img src={logo} alt="Logo" />;
          <p class="dash">Blog about your favorite music, featuring videos of popular songs like "Uptown Funk" by Bruno Mars! </p>
        <div class="container">
          <label for="uname"><b>Title</b></label>
          <input onChange={ e => setNewPost({
                                  ...newPost,
                                  title: e.currentTarget.value
                              }) } type="text" placeholder="Enter a title for your post!" name="uname"  required></input>
          <label for="psw"><b>Music Genre</b></label>
          <input onChange={ e => setNewPost({
                                  ...newPost,
                                  genre: e.currentTarget.value
                              }) } type="text" placeholder="What genre is the song you're reviewing?" name="psw" required></input>

          <label for="psw"><b>YouTube URL</b></label>
          <input type="text" placeholder="Enter the URL for your music video" name="psw" required></input>

          <label for="psw"><b>Comments</b></label>
          <input onChange={ e => setNewPost({
                                  ...newPost,
                                  body: e.currentTarget.value
                              }) } type="text" placeholder="Tell us what you think of this song!" name="psw" required></input>
  
          <button type="submit">Submit</button>
        </div>
  
        <div className="container" style={{backgroundColor: "rgb(159, 66, 66)"}}>
          <button type="button" className="cancelbtn">Cancel</button>
        </div>
        
      </form>
    );
}

    export default Blog;