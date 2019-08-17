import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import './qr_code.css';

class Qr_code extends Component {
	state = {
		data: [],
		delay: 100,
		result: 'No result',
		previewStyle: {
			height: 240,
			width: 320
		}
	};

	handleScan = (data) => {
		this.setState({
			result: data
		});
	};

	handleError = (err) => {
		console.error(err);
	};

	// handleLinkPut = () => {
	//   fetch(`http://localhost:3000/qrcodes/`, {
	//     headers: { "Content-Type": "application/json; charset=utf-8" },
	//     method: 'PUT',
	//     body: JSON.stringify({result: this.state.result})
	//     }).then(res=>res.json())
	//     .then(res => console.log(res));
	// }

	addUser = () => {
		fetch('http://localhost:3000/users/', {
			method: 'post',
			// body: JSON.stringify({})
		})
			.then((res) => res.json())
			.then((res) => console.log(res));
	};

	checkResult = () => {
		switch (this.state.result) {
			case null:
				break;
			case 'hello':
				this.addUser();
				break;
			default:
				return 'error';
		}
	};

	render() {
		{
			this.checkResult();
		}
		return (
			<div className="section_qr">
				<div className="section__qr_reader">
					<QrReader
						delay={this.state.delay}
						style={this.state.previewStyle}
						onError={this.handleError}
						onScan={this.handleScan}
					/>
					<p>{this.state.result}</p>
					{console.log(this.state.result)}
				</div>
			</div>
		);
	}
}

export default Qr_code;
