'use strict';

var React = require('react'),
    ReactDOM = require('react-dom');

module.exports = React.createClass({
    displayName: 'Aria Status',

    propTypes: process.env.NODE_ENV === 'production' ? {} : {
        message: React.PropTypes.string
    },

    componentDidMount: function componentDidMount() {
        var _this = this;

        // This is needed as `componentDidUpdate`
        // does not fire on the initial render.
        _this.setTextContent(_this.props.message);
    },

    componentDidUpdate: function componentDidUpdate() {
        var _this = this;

        _this.setTextContent(_this.props.message);
    },

    render: function render() {
        return React.createElement('span', {
            role: 'status',
            'aria-live': 'polite',
            style: {
                left: '-9999px',
                position: 'absolute'
            }
        });
    },

    // We cannot set `textContent` directly in `render`,
    // because React adds/deletes text nodes when rendering,
    // which confuses screen readers and doesn't cause them to read changes.
    setTextContent: function setTextContent(textContent) {
        // We could set `innerHTML`, but it's better to avoid it.
        ReactDOM.findDOMNode(this).textContent = textContent || '';
    }
});