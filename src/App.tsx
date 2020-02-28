import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

interface AppPropsInterface {}

interface AppStateInterface {
  cardNumber: string;
  cardName: string;
  expireMonth: string;
  expireYear: string;
  cw: string;
}

class App extends React.Component<AppPropsInterface, AppStateInterface> {
  constructor(props: AppPropsInterface) {
    super(props);
    this.state = {
      cardNumber: "",
      cardName: "",
      expireMonth: "",
      expireYear: "",
      cw: ""
    };

    this.handleChangeTextField = this.handleChangeTextField.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  containerStyle = {
    backgroundColor: "#cfe8fc",
    height: "100vh",
    overflow: "hidden"
  };
  creditCardStyle = {
    backgroundImage: "url('image/1.jpeg')",
    backgroundSize: "cover",
    borderRadius: "10px",
    height: "230px",
    width: "400px",
    margin: "-700px auto"
  };
  paperStyle = {
    backgroundColor: "white",
    margin: "100px auto",
    height: "550px",
    overflow: "hidden"
  };
  formContainerStyle = {
    width: "80%",
    margin: "200px auto"
  };
  cardNumberFormStyle = {
    width: "100%",
    margin: "10px 0"
  };
  cardNameFormStyle = {
    width: "100%",
    margin: "10px 0"
  };
  expireMonthSelectStyle = {
    marginTop: "10px",
    marginRight: "10px"
  };
  expireYearSelectStyle = {
    marginTop: "10px",
    marginRight: "10px"
  };
  CWFormStyle = {
    marginTop: "10px",
    marginRight: "10px",
    width: "25%"
  };
  buttonStyle = {
    marginTop: "30px",
    width: "100%",
    height: "50px"
  };
  handleChangeTextField(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const target = event.target;
    this.setState(() => {
      return { ...this.state, [target.name]: target.value };
    });
  }
  handleChangeSelect(
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) {
    const target = event.target;
    const name = target.name;
    if (name) {
      this.setState(() => {
        return { ...this.state, [name]: target.value };
      });
    }
  }

  monthSelection = [...Array(12)].map((_, i) => (
    <MenuItem key={i} value={String(i + 1)}>
      {String(i + 1).padStart(2, "0")}
    </MenuItem>
  ));

  yearSelection = [...Array(12)].map((_, i) => (
    <MenuItem key={i} value={String(i + 2020)}>
      {i + 2020}
    </MenuItem>
  ));

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Container fixed style={this.containerStyle}>
          <Paper style={this.paperStyle}>
            <div style={this.formContainerStyle}>
              <TextField
                required
                name="cardNumber"
                label="Card Number"
                variant="outlined"
                style={this.cardNumberFormStyle}
                value={this.state.cardNumber}
                onChange={this.handleChangeTextField}
              />
              <TextField
                required
                name="cardName"
                label="Card Name"
                variant="outlined"
                style={this.cardNameFormStyle}
                value={this.state.cardName}
                onChange={this.handleChangeTextField}
              />
              <FormControl variant="outlined" style={{ width: "35%" }}>
                <InputLabel>Expire Month</InputLabel>
                <Select
                  required
                  name="expireMonth"
                  style={this.expireMonthSelectStyle}
                  value={this.state.expireMonth}
                  onChange={this.handleChangeSelect}
                >
                  {this.monthSelection}
                </Select>
              </FormControl>
              <FormControl variant="outlined" style={{ width: "35%" }}>
                <InputLabel>Expire Year</InputLabel>
                <Select
                  required
                  name="expireYear"
                  style={this.expireYearSelectStyle}
                  value={this.state.expireYear}
                  onChange={this.handleChangeSelect}
                >
                  {this.yearSelection}
                </Select>
              </FormControl>

              <TextField
                required
                name="cw"
                label="CW"
                variant="outlined"
                style={this.CWFormStyle}
                value={this.state.cw}
                onChange={this.handleChangeTextField}
              />
              <Button
                variant="contained"
                color="primary"
                style={this.buttonStyle}
              >
                Submit
              </Button>
            </div>
          </Paper>
          <Paper elevation={8} style={this.creditCardStyle} />
        </Container>
      </div>
    );
  }
}

export default App;
