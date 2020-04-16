import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../index.css";

const useStyles = makeStyles((theme) => ({
  myForm: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  myButton: {
    margin: theme.spacing(1),
    marginBottom: 50,
  },
}));

const AddPostForm = (props) => {
  const classes = useStyles();
  const initialFormState = { id: null, title: "", author: "" };
  const [post, setPost] = useState(initialFormState);
 
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!post.title || !post.author) return;
    
    props.addPost(post)
  };

  return (
    <form
      className={classes.myForm}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          label="Title"
          id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small"
          name="title"
          value={post.title}
          onChange={handleInputChange}
        />
        <TextField
          label="Author"
          id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small"
          name="author"
          value={post.author}
          onChange={handleInputChange}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className={classes.myButton}
      >
        Submit
      </Button>
    </form>
  );
};

export { AddPostForm };
