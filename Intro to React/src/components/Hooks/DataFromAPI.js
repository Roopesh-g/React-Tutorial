import React, {useState, useEffect} from 'react';
import axios from 'axios';
function DataFromAPI() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${input}`)
      .then(res => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [input])

  const handleChange = (val) => {
    setInput(val);
  }

  return (
    <div>
      <input type="text" value={input} onChange={ (e) => handleChange(e.target.value) }></input>
      <ul>
      {
        isNaN(posts.length) ?
        (<li>{posts.title}</li>)
        :
        posts.map(post => (<li key={post.id}>{post.title}</li> ))
      }
      </ul>
    </div>
  )
}

export default DataFromAPI;
