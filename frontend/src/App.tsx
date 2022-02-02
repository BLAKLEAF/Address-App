import { Route, Switch } from "react-router-dom";
import CreateContact from "./Components/CreateContact/CreateContact";
import ContactList from "./Components/ContactList/ContactList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { ThemeContext } from "./Context/ThemeContext";
import { useContext } from "react";
import { PaletteType } from "@material-ui/core";

function App() {
  const { bodyTheme } = useContext(ThemeContext);
  const theme = createMuiTheme({
    palette: {
      type: bodyTheme as PaletteType,
    },
  });
  return (
    <div className="app">
      <Switch>
        <ThemeProvider theme={theme}>
          <Paper style={{ height: "100vh" }}>
            <Route exact path="/">
              <ContactList />
            </Route>
            <Route path="/add/:id?">
              <CreateContact />
            </Route>
          </Paper>
        </ThemeProvider>
      </Switch>
    </div>
  );
}

export default App;
