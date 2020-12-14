import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));

function Display(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              width="200"
              img
              src={props.showImage}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.showTitle}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Album ID: {props.showAlbum}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </div>
  );
}

export default Display;

