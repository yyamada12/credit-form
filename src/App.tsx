import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

function App() {
  const containerStyle = {
    backgroundColor: "#cfe8fc",
    height: "100vh",
    overflow: "hidden"
  };
  const creditCardStyle = {
    backgroundImage: "url('image/1.jpeg')",
    backgroundSize: "cover",
    borderRadius: "10px",
    height: "230px",
    width: "400px",
    margin: "-700px auto"
  };
  const paperStyle = {
    backgroundColor: "white",
    margin: "100px auto",
    height: "550px",
    overflow: "hidden"
  };
  const formContainerStyle = {
    width: "80%",
    margin: "200px auto"
  };
  const cardNumberFormStyle = {
    width: "100%",
    margin: "10px 0"
  };
  const cardNameFormStyle = {
    width: "100%",
    margin: "10px 0"
  };
  const expireMonthSelectStyle = {
    marginTop: "10px",
    marginRight: "10px"
  };
  const expireYearSelectStyle = {
    marginTop: "10px",
    marginRight: "10px"
  };
  const CWFormStyle = {
    marginTop: "10px",
    marginRight: "10px"
  };
  const buttonStyle = {
    marginTop: "30px",
    width: "100%",
    height: "50px"
  };

  return (
    <div className="App">
      <CssBaseline />
      <Container fixed style={containerStyle}>
        <Paper style={paperStyle}>
          <div style={formContainerStyle}>
            <TextField
              required
              label="Card Number"
              variant="outlined"
              style={cardNumberFormStyle}
            />
            <TextField
              required
              label="Card Name"
              variant="outlined"
              style={cardNameFormStyle}
            />
            <Select
              label="Expiration Month"
              variant="outlined"
              style={expireMonthSelectStyle}
            />
            <Select
              required
              label="Expiration Year"
              variant="outlined"
              style={expireYearSelectStyle}
            />
            <TextField
              required
              label="CW"
              variant="outlined"
              style={CWFormStyle}
            />
            <Button variant="contained" color="primary" style={buttonStyle}>
              Submit
            </Button>
          </div>
        </Paper>
        <Paper elevation={8} style={creditCardStyle} />
      </Container>
    </div>
  );
}

export default App;
