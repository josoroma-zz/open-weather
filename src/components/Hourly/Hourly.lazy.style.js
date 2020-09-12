import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
    paddingTop: theme.spacing(16),
    paddingBottom: 0,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
      paddingTop: theme.spacing(12),
    },
  },
  link: {
    textDecoration: "none",
  },
}));

export default Style;
