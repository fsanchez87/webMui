import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import  places from "../static/places";

function PlaceToVisit() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <ImageCard places={places[1]} />
        <ImageCard places={places[0]} />
    </div>
  );
}

export default PlaceToVisit;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
}));
