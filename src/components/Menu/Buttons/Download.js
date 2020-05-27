import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Shape from "../../../models/Shape";

class Download extends React.Component {
	getDataURI() {
		const dataStr = JSON.stringify(this.props.objects);
		return `data:application/json;charset=utf-8,${encodeURIComponent(dataStr,)}`;
	}

	render() {
		return (
			<a
				title="Save as JSON"
				className="btn btn-light ml-2"
				href={this.getDataURI()}
				download={`Example.json`}
				onClick={() => {
					this.props.done();
				}}
			>
				<i className="fas fa-file" />
			</a>
		);
	}
}

Download.propTypes = {
	objects: PropTypes.arrayOf(PropTypes.instanceOf(Shape)),
	done: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	objects: state.objects,
});

export default connect(mapStateToProps, null)(Download);
