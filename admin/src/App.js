import React, { useState, useEffect } from "react";
import "./index.css";
import MyTable from "./components/MyTable";
import { AddPostForm } from "./components/AddPostForm";
import { EditPostForm } from "./components/EditPostForm";
import {getPosts, apiAddPost, apiDeletePost, apiUpdatePost} from "./api/api.js";

const App = () => {
  const [isUpdated, setUpdated] = useState(false);
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, title: "", author: "" };
  const [currentPost, setCurrentPost] = useState(initialFormState);
   
  useEffect(() => {getPosts(setPosts)}, [isUpdated]);

  const addPost = (post) => {
    apiAddPost (post, () => {
      setUpdated(!isUpdated);
      post.title = "";
      post.author = ""; 
    })
  }

  const deletePost = (id) => {
    setEditing(false);
    apiDeletePost(id, () => {
      setUpdated(!isUpdated);
    })
  };

  const updatePost = (id, updatePost) => {
    setEditing(false);
    apiUpdatePost(id, updatePost, () => {
      setUpdated(!isUpdated);
    })
  };
 
  const editRow = (post) => {
    console.log("Current post" + post);
    console.log(post);
    setEditing(true);
    setCurrentPost({ id: post.id, title: post.title, author: post.author });
  };

  // debugger;
  return (
    <div className="container">
      {editing ? (
        <div>
          <h2>Edit post</h2>
          <EditPostForm 
            editing={editing}
            setEditing={setEditing}
            currentPost={currentPost}
            updatePost={updatePost}
          />
        </div>
      ) : (
        <div>
          <h2>Add post</h2>
          <AddPostForm addPost={addPost} />
        </div>
      )}

      <MyTable
        header={[
          {
            name: "Id",
            prop: "id",
          },
          {
            name: "Title",
            prop: "title",
          },
          {
            name: "Author",
            prop: "author",
          },
          // {
          //   name: "cathegory",
          //   prop: "cathegory",
          // },
          {
            name: "Actions",
            prop: "actions",
          },
        ]}
        posts={posts} editRow={editRow} deletePost={deletePost} 
      />
    </div>
  );
};

export default App;
