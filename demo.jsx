/** @jsx React.DOM */
'use strict';

var React = require('react');
var YHeader = require('./index.jsx!');

React.render((
    <div>
        <YHeader>
            Some text
        </YHeader>
    </div>
), document.getElementById('content'));
