import React, { Component } from 'react';

class ApiCall extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    fetch('http://localhost:5000/api/data')
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {data ? <p>{data.message}</p> : <p>API funcionando!</p>}
      </div>
    );
  }
}

export default ApiCall;
