import React, { Component } from 'react';
// import BarcodeReader from 'react-barcode-reader'
import dynamic from 'next/dynamic';

const BarcodeReader = dynamic(() => import('react-barcode-reader'), {
  ssr: false,
});

class Scan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 'No result',
    };

    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    this.setState({
      result: data,
    });
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    return (
      <div>
        <BarcodeReader onError={this.handleError} onScan={this.handleScan} />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default Scan;
