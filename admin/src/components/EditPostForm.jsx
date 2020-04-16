import React, { useState, useEffect } from "react";
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
  buttonGroup: {
    margin: theme.spacing(1),
    marginBottom: 50,
  },
  editButton: {
    marginRight: 10,
  },
}));

const EditPostForm = (props) => {
  const classes = useStyles();
  const [post, setPost] = useState(props.currentPost);

  useEffect(() => {
    setPost(props.currentPost);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setPost({ ...post, [name]: value });
  };

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //     if (!post.title || !post.author) return;

  //     props.updatePost(post.id, post);
  //   };
  // console.log(props);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updatePost(post.id, post);
      }}
      className={classes.myForm}
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
      <div className={classes.buttonGroup}>
        <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.editButton}>
          Submit
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.setEditing(false)}
        >
          Cancel
        </Button>
      </div>
      
    </form>
  );
};

export { EditPostForm };
