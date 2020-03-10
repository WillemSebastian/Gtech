import React from "react";

// reactstrap components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { Button, Container, Row, Col } from "reactstrap";
// core components

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 240
  }
});

function AddToCart() {}

function ProductCard(props) {
  const [count, setCounter] = React.useState(0);
  const classes = useStyles();
  return (
    <>
      <Col md="3" style={{ marginBottom: 20 }}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.data.image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.data.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Add To Cart
            </Button>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: 100
              }}
            >
              <div
                style={{ fontSize: 20, cursor: "pointer" }}
                onClick={() => (count !== 0 ? setCounter(count - 1) : null)}
              >
                -
              </div>
              <div style={{ fontSize: 20 }}>{count}</div>
              <div
                style={{ fontSize: 20, cursor: "pointer" }}
                onClick={() => setCounter(count + 1)}
              >
                +
              </div>
            </div>
          </CardActions>
        </Card>
      </Col>
    </>
  );
}

export default ProductCard;
