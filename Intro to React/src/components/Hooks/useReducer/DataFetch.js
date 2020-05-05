import React, {useReducer,useEffect, useCallback} from 'react';
import axios from 'axios';

const initailPosts = {
  loading: true,
  error: '',
  post: []
};

const reducer = ((state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: '',
        post: action.payload
      }
    case "FETCH_ERROR":
      return {
        loading: false,
        error: 'Error encountered!!!',
        post: {}
      }
    default: return state;

  }
})

const initialInput = "";
const inputReducer = (state, action) => {
  return action
}


function DataFetch() {
  const [posts, dispatch] = useReducer(reducer, initailPosts)
  const [input, dispatchInput] = useReducer(inputReducer, initialInput)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${input}`)
      .then(res => {
        dispatch({type: "FETCH_SUCCESS", payload: res.data})
      })
      .catch(err => {
        dispatch({type: "FETCH_ERROR"})
      })
  }, [input])

  return (
    <div>
      <input type="text" value={input} onChange={(e) => dispatchInput(e.target.value)}/>
      <ul>
      {console.log(input)}
      {
        !isNaN(posts.post.length) ?
          posts.loading ?
            "Loading..." :
            posts.post.map(post => (<li key={post.id}>{post.title}</li>))
          :
          (<li key={posts.post.id}>{posts.post.title}</li>)
      }
      </ul>
    </div>
  )
}

export default DataFetch;
