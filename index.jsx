var React = require('react');
var b = require('b_');

var Style = require('./index.css!');

var YHeader = {
	displayName: 'y-header',

	getDefaultProps: function() {
		return {
			height: '70px'
		};
	},

	getInitialState: function() {
		return {
			height: this.props.height
		};
	},

	render: function () {
		var classes = b('y-header', {
			theme: this.props.theme || 'normal',
			border: this.props.border,
			fixed: this.props.fixed
		});

		var styles = {
			height: this.state.height,
			'line-height': this.state.height
		};

		return (
			<div className={classes} style={styles}>
				{this.props.children}
			</div>
		);
	}
};

module.exports = React.createClass(YHeader);
module.exports.Style = Style;
module.exports.Class = YHeader;
