import React from "react";
import Paper from "@material-ui/core/Paper";

interface IProps {
  cardInfo: {
    cardNumber: string;
    cardName: string;
    expireMonth: string;
    expireYear: string;
    cw: string;
  };
}

export default (props: IProps) => (
  <Paper elevation={8} style={creditCardStyle}>
    <div style={containerStyle}>
      <div style={topContainerStyle}>
        <img src="image/chip.png" alt="chip" style={chipStyle} />
        <img src="image/jcb.png" alt="logo" style={logoStyle} />
      </div>
    </div>
  </Paper>
);

const creditCardStyle = {
  backgroundImage: "url('image/1.jpeg')",
  backgroundSize: "cover",
  borderRadius: "10px",
  height: "240px",
  width: "400px",
  margin: "-700px auto"
};

const chipStyle = {
  width: "60px"
};

const containerStyle = {
  padding: "25px 15px"
};

const logoStyle = {
  width: "100px"
};

const topContainerStyle = {
  display: "flex",
  justifyContent: "space-between"
};
