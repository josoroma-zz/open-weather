import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  root: {
    maxWidth: 135,
    minWidth: 135,
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
  },
}));

export default Style;
