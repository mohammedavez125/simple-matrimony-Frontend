import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { MdFiberManualRecord } from "react-icons/md"; // Importing an icon from React Icons

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    margin: "20px",
  },
  title: {
    fontSize: 14,
  },
  text: {
    width: 350,
    margin: "10px",
  },
});

export default function Details() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          variant="h5"
          gutterBottom
        >
          Enter Your Details
        </Typography>
        <TextField
          id="filled-basic"
          label="Username"
          variant="filled"
          className={classes.text}
        />
        <br />
        <TextField
          id="filled-basic"
          label="Address"
          variant="filled"
          multiline
          minRows={4}
          className={classes.text}
        />
      </CardContent>
      <CardContent>
        <MdFiberManualRecord /> {/* Using the React Icon component */}
        <span style={{ marginLeft: "5px" }}>Some other content</span>
      </CardContent>
    </Card>
  );
}
