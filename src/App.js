import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core/";
import Header from "./components/Header";
import PlaceToVisit from "./components/PlaceToVisit";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit/>
    </div>
  );
}

export default App;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
