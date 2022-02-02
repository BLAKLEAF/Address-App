import { Button, Col, Form, Row } from "react-bootstrap";
import TopBar from "../Navbar/TopBar";
import { useFetch } from "../../Hooks/useFetch";
import "./CreateContact.scss";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
// import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      Width: "81ch",
    },
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        // width: "25ch",
      },
    },
  })
);

const CreateContact = () => {
  const { handleChange, handleSubmit, inputData } = useFetch();
  const classes = useStyles();

  return (
    <div>
      <TopBar to="/" />
      {/* <Form onSubmit={handleSubmit} className="form justify-content-md-center"> */}
      <Grid container justify="center">
        <form
          onSubmit={handleSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          {/* <Grid container spacing={1}> */}
          {/* <Grid item xs={6}> */}
          <div>
            <TextField
              name="title"
              value={inputData.title}
              onChange={handleChange}
              label="Title"
              variant="outlined"
              size="small"
              className="title"
              color="secondary"
              // fullWidth
            />
          </div>
          {/* </Grid> */}

          {/* <Grid item xs={6} sm={4}> */}
          <div>
            <TextField
              required
              name="firstName"
              value={inputData.firstName}
              onChange={handleChange}
              label="FirstName"
              variant="outlined"
              size="small"
            />
            <TextField
              label="Middle Name"
              variant="outlined"
              size="small"
              name="middleName"
              value={inputData.middleName}
              onChange={handleChange}
            />
            <TextField
              label="LastName"
              variant="outlined"
              size="small"
              name="lastName"
              value={inputData.lastName}
              onChange={handleChange}
            />
          </div>
          {/* </Grid> */}
          <div>
            <TextField
              name="age"
              value={inputData.age}
              onChange={handleChange}
              label="Age"
              type="number"
              variant="outlined"
              size="small"
              className="age_date"
            />
            <TextField
              type="date"
              variant="outlined"
              size="small"
              name="datee"
              value={inputData.datee}
              onChange={handleChange}
              className="age_date"
            />
          </div>
          <div>
            <TextField
              name="phoneNumber"
              value={inputData.phoneNumber}
              onChange={handleChange}
              required
              label="Phone Number"
              type="number"
              variant="outlined"
              size="small"
              className="age_date"
            />
            <TextField
              name="email"
              value={inputData.email}
              onChange={handleChange}
              required
              label="Email"
              type="email"
              variant="outlined"
              size="small"
              className="age_date"
            />
          </div>
          <div>
            <TextField
              name="github"
              value={inputData.github}
              onChange={handleChange}
              label="Github"
              variant="outlined"
              size="small"
              className="age_date"
            />
            <TextField
              name="linkedin"
              value={inputData.linkedin}
              onChange={handleChange}
              label="LinkedIn"
              variant="outlined"
              size="small"
              className="age_date"
            />
          </div>
          <div>
            <FormControl
              variant="outlined"
              size="small"
              // className={classes.formControl}
              className="dropdown"
            >
              <InputLabel>Contact Type</InputLabel>
              <Select
                native
                name="category"
                value={inputData.category}
                onChange={handleChange}
                label="Contact Type"
                inputProps={{
                  name: "category",
                  id: "outlined-age-native-simple",
                }}
              >
                <option value="" />
                <option value="Business">Business</option>
                <option value="Family">Family</option>
                <option value="Other">Other</option>
              </Select>
            </FormControl>
            <RadioGroup
              row
              name="gender"
              // defaultValue="top"
              className="radio"
            >
              <FormControlLabel
                value="Male"
                name="gender"
                onChange={handleChange}
                control={<Radio color="primary" />}
                label="Male"
                labelPlacement="start"
              />
              <FormControlLabel
                value="Female"
                name="gender"
                onChange={handleChange}
                control={<Radio color="primary" />}
                label="Female"
                labelPlacement="start"
              />
              <FormControlLabel
                value="Other"
                onChange={handleChange}
                name="gender"
                control={<Radio color="primary" />}
                label="Other"
                labelPlacement="start"
              />
            </RadioGroup>
          </div>

          <Button type="submit" size="sm" className="submit_button">
            Submit
          </Button>
          {/* </Grid> */}
          {/* <Form.Group as={Row} className="mt-3">
          <Form.Label column sm={2}>
            Title
          </Form.Label>
          <Col sm={2}>
            <Form.Control
              size="sm"
              type="text"
              name="title"
              placeholder="Title"
              value={inputData.title}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mt-2">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={2} className="">
            <Form.Control
              size="sm"
              type="text"
              placeholder="FirstName"
              name="firstName"
              value={inputData.firstName}
              onChange={handleChange}
              required
            />
          </Col>
          <Col sm={2} className="">
            <Form.Control
              size="sm"
              type="text"
              placeholder="MiddleName"
              name="middleName"
              value={inputData.middleName}
              onChange={handleChange}
            />
          </Col>
          <Col sm={2} className="">
            <Form.Control
              size="sm"
              type="text"
              placeholder="LastName"
              name="lastName"
              value={inputData.lastName}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mt-2">
          <Form.Label column sm={2}>
            Age
          </Form.Label>
          <Col sm={2}>
            <Form.Control
              size="sm"
              type="number"
              placeholder="Age"
              name="age"
              value={inputData.age}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mt-2">
          <Form.Label column sm={2}>
            Date of Birth
          </Form.Label>
          <Col sm={2}>
            <Form.Control
              size="sm"
              type="date"
              placeholder="Date"
              name="datee"
              value={inputData.datee}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mt-2">
          <Form.Label column sm={2}>
            Phone Number
          </Form.Label>
          <Col sm={2}>
            <Form.Control
              size="sm"
              type="number"
              placeholder="Phone Number"
              name="phoneNumber"
              value={inputData.phoneNumber}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mt-2">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={2}>
            <Form.Control
              size="sm"
              type="email"
              placeholder="Email"
              name="email"
              value={inputData.email}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mt-2">
          <Form.Label column sm={2}>
            Github
          </Form.Label>
          <Col sm={2}>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Github"
              name="github"
              value={inputData.github}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mt-2">
          <Form.Label column sm={2}>
            LinkedIn
          </Form.Label>
          <Col sm={2}>
            <Form.Control
              size="sm"
              type="text"
              placeholder="LinkedIn"
              name="linkedin"
              value={inputData.linkedin}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mt-2">
          <Form.Label column sm={2}>
            Contact Type
          </Form.Label>
          <Col sm={2}>
            <Form.Control
              size="sm"
              as="select"
              id="inlineFormCustomSelect"
              name="category"
              value={inputData.category}
              onChange={handleChange}
              custom
            >
              <option value="">Contact Type</option>
              <option value="Business">Business</option>
              <option value="Family">Family</option>
              <option value="Other">Other</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <fieldset>
          <Form.Group as={Row} className="mt-2">
            <Form.Label as="legend" column sm={2}>
              Gender
            </Form.Label>
            <Col sm={2}>
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                value="Male"
                onChange={handleChange}
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                value="Female"
                onChange={handleChange}
                id="formHorizontalRadios2"
              />
            </Col>
          </Form.Group>
        </fieldset>

        <Form.Group as={Row} className="mt-2">
          <Col sm={{ span: 3, offset: 2 }}>
            <Button type="submit" size="sm">
              Submit
            </Button>
          </Col>
        </Form.Group> */}
        </form>
      </Grid>
      {/* </Form> */}
    </div>
  );
};

export default CreateContact;
