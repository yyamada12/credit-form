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
      <img src="image/chip.png" style={chipStyle} />
    </div>
  </Paper>
);

const creditCardStyle = {
  backgroundImage: "url('image/1.jpeg')",
  backgroundSize: "cover",
  borderRadius: "10px",
  height: "270px",
  width: "430px",
  margin: "-700px auto"
};

const chipStyle = {
  width: "60px"
};

const containerStyle = {
  padding: "25px 15px"
};
