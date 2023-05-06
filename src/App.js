import React, { useRef, useState } from 'react';
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import PostList from './components/PostList';
// import MyButton from './components/UI/button/MyButton';
// import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ]);
  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Python', body: 'Description' },
    { id: 2, title: 'Python 2', body: 'Description' },
    { id: 3, title: 'Python 3', body: 'Description' },
  ]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
