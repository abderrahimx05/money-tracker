import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
function Main() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Money Tracker" subheader="Developed by AB company" />
      <Typography variant="h5">abder</Typography>
    </Card>
  );
}

export default Main;
