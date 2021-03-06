import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import CreditForm from "./CreditForm";
import CreditCard from "./CreditCard";

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

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Container fixed style={this.containerStyle}>
          <CreditForm
            cardInfo={this.state}
            handleChangeTextField={this.handleChangeTextField}
            handleChangeSelect={this.handleChangeSelect}
          />
          <CreditCard cardInfo={this.state} />
        </Container>
      </div>
    );
  }
}

export default App;
