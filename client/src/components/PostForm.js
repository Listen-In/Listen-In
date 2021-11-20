import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Blog from "../pages/Blog"
import logo from '../images/logo.jpg';
import { Query } from 'react-apollo';
import Dashboard from "../views/Dashboard";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ADD_POST } from '../utils/mutations';
import { QUERY_POSTS } from '../utils/queries';

const PostForm = () => {
  const [formState, setFormState] = useState({
    title: '',
    genre: '',
    url: '',
    body: '',
  });
  /* const [titleState, setTitleState] = useState("");
  const [genreState, setGenreState] = useState("");
  const [urlState, setUrlState] = useState("");
  const [bodyState, setBodyState] = useState(""); */

  const [addPost, { error }] = useMutation(ADD_POST);
  // , {
  //   update(cache, { data: { addPost } }) {
  //     try {
  //       const { posts } = cache.readQuery({ query: QUERY_POSTS });

  //       cache.writeQuery({
  //         query: QUERY_POSTS,
  //         data: { posts: [addPost, ...posts] },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  // });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: { ...formState },
      });

      setFormState({
        title: '',
        genre: '',
        url: '',
        body: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    
    <div>
        <form method="post" onSubmit={ handleFormSubmit} >
          <img src={logo} alt="Logo" />;
          <p class="dash">Blog about your favorite music, featuring videos of popular songs like "Uptown Funk" by Bruno Mars! </p>
        <div class="container">
          <label for="title"><b>Title</b></label>
          <input onChange={ handleChange } type="text" placeholder="Enter a title for your post!" name="title" value={formState.title} required></input>
          <label for="psw"><b>Music Genre</b></label>
          <input onChange={ handleChange } type="text" placeholder="What genre is the song you're reviewing?" name="genre" value={formState.genre} required></input>

          <label for="url"><b>YouTube URL</b></label>
          <input onChange={ handleChange } type="text" placeholder="Enter the URL for your music video" name="url" value={formState.url} required></input>

          <label for="body"><b>Comments</b></label>
          <input onChange={ handleChange } type="text" placeholder="Tell us what you think of this song!" name="body" value={formState.body} required></input>
  
          <button type="submit">Submit</button>
        </div>
  
        <div className="container" style={{backgroundColor: "rgb(159, 66, 66)"}}>
          <button type="button" className="cancelbtn">Cancel</button>
        </div>
        
      </form>
    </div>
  );
};

export default PostForm;