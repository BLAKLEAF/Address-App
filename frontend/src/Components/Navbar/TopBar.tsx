import { NavLink } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button, Navbar } from "react-bootstrap";
import "./TopBar.scss";
import { ThemeContext } from "../../Context/ThemeContext";
import { useContext, useState } from "react";
import Switch from "@material-ui/core/Switch";

const TopBar = (props: any) => {
  const { navTheme, toggleTheme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);

  const toggleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };
  return (
    <Navbar bg={navTheme} variant="dark" className="parentNav">
      <div>
        <h6>Address App</h6>
      </div>
      <div className="nav_right">
        <Switch
          name="checked"
          checked={checked}
          onChange={toggleChecked}
          onClick={toggleTheme}
          color="default"
          size="small"
        />

        <NavLink to={props.to}>
          <Button variant="outline-light" size="sm">
            {props.to === "/" ? "Contact List" : "Add Contact"}
            <AiOutlineArrowRight className="mb-1" />
          </Button>
        </NavLink>
      </div>
    </Navbar>
  );
};

export default TopBar;
