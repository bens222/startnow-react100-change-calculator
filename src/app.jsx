import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '0',
      amountReceived: '0',
      twenties: '0',
      tens: '0',
      fives: '0',
      ones: '0',
      quarters: '0',
      dimes: '0',
      nickels: '0',
      pennies: '0',
      changeDue: '0'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const amountDue = this.state.amountDue;
    const amountReceived = this.state.amountReceived;
    const changeDue = (amountReceived - amountDue).toFixed(2);
    this.setState({ changeDue });
    let dollarChange = Math.floor(changeDue);
    if (dollarChange > 19) {
      const twenties = Math.floor(dollarChange / 20);
      this.setState({ twenties });
      dollarChange -= (twenties * 20);
    } else {
      const twenties = 0;
      this.setState({ twenties });
    }
    if ((dollarChange % 10) > 0) {
      const tens = Math.floor(dollarChange / 10);
      this.setState({ tens });
      dollarChange -= (tens * 10);
    } else {
      const tens = 0;
      this.setState({ tens });
    }
    if ((dollarChange / 5) > 0) {
      const fives = Math.floor(dollarChange / 5);
      this.setState({ fives });
      dollarChange -= (fives * 5);
    } else {
      const fives = 0;
      this.setState({ fives });
    }
    if (dollarChange > 0) {
      const ones = Math.floor(dollarChange);
      this.setState({ ones });
    } else {
      const ones = 0;
      this.setState({ ones });
    }

    let decimalValue = changeDue % 1;
    function getDecimalValue() {
      const splitDecimal = decimalValue.toString().split('');
      if (splitDecimal.length >= 4 || (splitDecimal.length > 1 && splitDecimal.length < 4)) {
        decimalValue = decimalValue.toFixed(2);
        decimalValue *= 100;
      }
    }
    getDecimalValue();

    if (decimalValue > 24) {
      const quarters = Math.floor(decimalValue / 25);
      this.setState({ quarters });
      decimalValue -= (quarters * 25);
    } else {
      const quarters = 0;
      this.setState({ quarters });
    }
    if ((decimalValue % 10) >= 0) {
      const dimes = Math.floor(decimalValue / 10);
      this.setState({ dimes });
      decimalValue -= (dimes * 10);
    } else {
      const dimes = 0;
      this.setState({ dimes });
    }
    if ((decimalValue % 5) >= 0) {
      const nickels = Math.floor(decimalValue / 5);
      this.setState({ nickels });
      decimalValue -= (nickels * 5);
    } else {
      const nickels = 0;
      this.setState({ nickels });
    }
    if ((decimalValue % 5) >= 0) {
      const pennies = Math.ceil(decimalValue);
      this.setState({ pennies });
    } else {
      const pennies = 0;
      this.setState({ pennies });
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='border-bottom border-white mb-4'>
          <h1 className='text-white pb-2 pt-2'>Change Calculator</h1>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='card'>
              <h6 className='card-header text-secondary'>Enter Information</h6>
              <div className='card-body'>
                <div className='card-text'>
                  <h6 htmlFor='amount-due'>How much is due?</h6>
                </div>
                <div className='card-text'>
                  <input
                    className='w-100'
                    name='amountDue'
                    value={ this.state.amountDue }
                    onChange={ this.handleChange }
                  />
                </div>
                <div className='card-text mt-2'>
                  <h6 htmlFor='amount-received'>How much is received?</h6>
                </div>
                <div className='card-text'>
                  <input
                    className='w-100'
                    name='amountReceived'
                    value={ this.state.amountReceived }
                    onChange={ this.handleChange }
                  />
                </div>
              </div>
              <div className='card-footer'>
                <button
                  className='button btn btn-primary text-white w-100'
                  name='submit'
                  onClick={ this.handleSubmit }
                >
                Calculate
                </button>
              </div>
            </div>
          </div>
          <div className='col-sm-8'>
            <div className='card'>
              <div
                className='alert alert-success text-center m-3'
                role='alert'
                name='changeDue'
                value={ this.state.changeDue }
              >
                The total change due is ${this.state.changeDue}
              </div>
              <div className='container'>
                <div className='row mb-3'>
                  <div className='col-sm'>
                    <div className='card'>
                      <div className='card-header'>
                        <p className='card-title text-center font-weight-bold'>Twenties</p>
                        <p
                          className='change card-subtitle mt-2 text-muted text-center'
                          name='twenties'
                          value={ this.state.twenties }
                        >
                          {this.state.twenties}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm'>
                    <div className='card'>
                      <div className='card-header'>
                        <p className='card-title text-center font-weight-bold'>Tens</p>
                        <p
                          className='change card-subtitle mt-2 text-muted text-center'
                          name='tens'
                          value={ this.state.tens }
                        >
                          {this.state.tens}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm'>
                    <div className='card'>
                      <div className='card-header'>
                        <p className='card-title text-center font-weight-bold'>Fives</p>
                        <p
                          className='change card-subtitle mt-2 text-muted text-center'
                          name='fives'
                          value={ this.state.fives }
                        >
                          {this.state.fives}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm'>
                    <div className='card'>
                      <div className='card-header'>
                        <p className='card-title text-center font-weight-bold'>Ones</p>
                        <p
                          className='change card-subtitle mt-2 text-muted text-center'
                          name='ones'
                          value={ this.state.ones }
                        >
                          {this.state.ones}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container mb-3'>
                <div className='row'>
                  <div className='col-sm'>
                    <div className='card'>
                      <div className='card-header'>
                        <p className='card-title text-center font-weight-bold'>Quarters</p>
                        <p
                          className='change card-subtitle mt-2 text-muted text-center'
                          name='quarters'
                          value={ this.state.quarters }
                        >
                          {this.state.quarters}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm'>
                    <div className='card'>
                      <div className='card-header'>
                        <p className='card-title text-center font-weight-bold'>Dimes</p>
                        <p
                          className='change card-subtitle mt-2 text-muted text-center'
                          name='dimes'
                          value={ this.state.dimes }
                        >
                          {this.state.dimes}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm'>
                    <div className='card'>
                      <div className='card-header'>
                        <p className='card-title text-center font-weight-bold'>Nickels</p>
                        <p
                          className='change card-subtitle mt-2 text-muted text-center'
                          name='nickels'
                          value={ this.state.nickels }
                        >
                          {this.state.nickels}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm'>
                    <div className='card'>
                      <div className='card-header'>
                        <p className='card-title text-center font-weight-bold'>Pennies</p>
                        <p
                          className='change card-subtitle mt-2 text-muted text-center'
                          name='pennies'
                          value={ this.state.pennies }
                        >
                          {this.state.pennies}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
