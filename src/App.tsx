import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

interface AppPropsInterface {}

interface AppStateInterface {
  cardNumber: string;
}

class App extends React.Component<AppPropsInterface, AppStateInterface> {
  constructor(props: AppPropsInterface) {
    super(props);
    this.state = {
      cardNumber: ""
    };

    this.handleChange = this.handleChange.bind(this);
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
    marginRight: "10px"
  };
  buttonStyle = {
    marginTop: "30px",
    width: "100%",
    height: "50px"
  };
  handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const target = event.target;
    this.setState(() => {
      return { ...this.state, [target.name]: target.value };
    });
  }
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
                onChange={this.handleChange}
              />
              <TextField
                required
                label="Card Name"
                variant="outlined"
                style={this.cardNameFormStyle}
              />
              <Select
                label="Expiration Month"
                variant="outlined"
                style={this.expireMonthSelectStyle}
              />
              <Select
                required
                label="Expiration Year"
                variant="outlined"
                style={this.expireYearSelectStyle}
              />
              <TextField
                required
                label="CW"
                variant="outlined"
                style={this.CWFormStyle}
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
