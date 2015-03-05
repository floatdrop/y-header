var React = require('react');
var b = require('b_');

var Style = require('./index.css!');

var YHeader = {
	displayName: 'y-header',

	render: function () {
		var classes = b('y-header', {
			theme: this.props.theme || 'normal',
			border: this.props.border,
			fixed: this.props.fixed
		});

		return (
			<div className={classes}>
				{this.props.children}
			</div>
		);
	}
};

module.exports = React.createClass(YHeader);
module.exports.Style = Style;
module.exports.Class = YHeader;
