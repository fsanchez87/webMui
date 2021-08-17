import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import places from "../static/places";
import useWindowsPosition from "../hook/useWindowsPosition";

function PlaceToVisit() {
  const classes = useStyles();
  const checked = useWindowsPosition("header");
  return (
    <div className={classes.root}>
      <ImageCard places={places[1]} checked={checked} />
      <ImageCard places={places[0]} checked={checked} />
    </div>
  );
}

export default PlaceToVisit;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
