import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  root: {
    maxWidth: 115,
    minWidth: 115,
    maxHeight: 132,
    display: "inline-block",
    margin: theme.spacing(1),
  },
  header: {
    backgroundColor: "transparent",
    padding: 0,
    textAlign: "center",
  },
  title: {
    margin: 0,
    marginTop: 10,
    fontSize: theme.spacing(2),
  },
  iconIMG: {
    margin: -20,
    marginTop: -30,
    marginRight: -5,
  },
}));

export default Style;
