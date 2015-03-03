var React = require('react');
var b = require('b_');

var Style = require('./index.css!');

var YHeader = {
	render: function () {
		var classes = b('y-header', {
			theme: this.props.theme || 'normal'
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
