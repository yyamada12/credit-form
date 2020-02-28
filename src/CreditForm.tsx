import React from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

interface IProps {
  cardInfo: {
    cardNumber: string;
    cardName: string;
    expireMonth: string;
    expireYear: string;
    cw: string;
  };
  handleChangeTextField: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleChangeSelect: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => void;
}

export default (props: IProps) => (
  <Paper style={paperStyle}>
    <div style={formContainerStyle}>
      <TextField
        required
        name="cardNumber"
        label="Card Number"
        variant="outlined"
        style={cardNumberFormStyle}
        value={props.cardInfo.cardNumber}
        onChange={props.handleChangeTextField}
      />
      <TextField
        required
        name="cardName"
        label="Card Name"
        variant="outlined"
        style={cardNameFormStyle}
        value={props.cardInfo.cardName}
        onChange={props.handleChangeTextField}
      />
      <FormControl variant="outlined" style={{ width: "35%" }}>
        <InputLabel>Expire Month</InputLabel>
        <Select
          required
          name="expireMonth"
          style={expireMonthSelectStyle}
          value={props.cardInfo.expireMonth}
          onChange={props.handleChangeSelect}
        >
          {monthSelection}
        </Select>
      </FormControl>
      <FormControl variant="outlined" style={{ width: "35%" }}>
        <InputLabel>Expire Year</InputLabel>
        <Select
          required
          name="expireYear"
          style={expireYearSelectStyle}
          value={props.cardInfo.expireYear}
          onChange={props.handleChangeSelect}
        >
          {yearSelection}
        </Select>
      </FormControl>

      <TextField
        required
        name="cw"
        label="CW"
        variant="outlined"
        style={CWFormStyle}
        value={props.cardInfo.cw}
        onChange={props.handleChangeTextField}
      />
      <Button variant="contained" color="primary" style={buttonStyle}>
        Submit
      </Button>
    </div>
  </Paper>
);

const monthSelection = [...Array(12)].map((_, i) => (
  <MenuItem key={i} value={String(i + 1)}>
    {String(i + 1).padStart(2, "0")}
  </MenuItem>
));

const yearSelection = [...Array(12)].map((_, i) => (
  <MenuItem key={i} value={String(i + 2020)}>
    {i + 2020}
  </MenuItem>
));

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
  marginRight: "10px",
  width: "25%"
};
const buttonStyle = {
  marginTop: "30px",
  width: "100%",
  height: "50px"
};
