import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.styl';
import * as actions from '../../actions';
import Channel from '../../components/Channel'

class App extends Component {
	constructor(props) {
	  super(props)
	}

	render() {
		const { data, error, count, ...actions } = this.props;
		return(
			<div>
				<Channel data={data} error={error} count={count} onFetchAsync={actions.fetchData} />
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		data: state.default.data,
		error: state.default.error,
		count: state.default.count
	}
}

export default connect(mapStateToProps,{
	fetchData: actions.fetchData,
})(App);