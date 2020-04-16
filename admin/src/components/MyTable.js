import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable({ posts, header, deletePost, editRow }) {
  // debugger;
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {header.map((x, i) => (
              <TableCell key={`thc-${i}`}>{x.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post, j) => (
            <>
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.author}</TableCell>
                <TableCell>
                  <IconButton aria-label="edit"
                              className={classes.margin}
                              onClick={() => editRow(post)}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton aria-label="delete"
                              className={classes.margin}
                              onClick={() => deletePost(post.id)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                  {/* <IconButton aria-label="add"
                              className={classes.margin}>
                    <AddBoxIcon fontSize="small" />
                  </IconButton>  */}
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
