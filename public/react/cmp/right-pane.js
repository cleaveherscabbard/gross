'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterList = function (_React$Component) {
  _inherits(FilterList, _React$Component);

  function FilterList() {
    _classCallCheck(this, FilterList);

    return _possibleConstructorReturn(this, (FilterList.__proto__ || Object.getPrototypeOf(FilterList)).apply(this, arguments));
  }

  _createClass(FilterList, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "filter-list-container box" },
        React.createElement(
          "button",
          { type: "button", id: "filter-all" },
          "ALL"
        ),
        React.createElement(
          "button",
          { type: "button", id: "filter-none" },
          "NONE"
        ),
        React.createElement("div", { className: "filter-list", id: this.props.idt + "-filters" })
      );
    }
  }]);

  return FilterList;
}(React.Component);

var RightPane = function (_React$Component2) {
  _inherits(RightPane, _React$Component2);

  function RightPane(props) {
    _classCallCheck(this, RightPane);

    console.log("constructing right pane");
    return _possibleConstructorReturn(this, (RightPane.__proto__ || Object.getPrototypeOf(RightPane)).call(this, props));
  }

  _createClass(RightPane, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "right-pane", className: "pane" },
        React.createElement(
          "div",
          { className: "section-title box" },
          "FILTERS",
          React.createElement(
            "button",
            { type: "button", id: "filter-btn" },
            "FILTER"
          ),
          React.createElement("button", { type: "button", id: "fvt-btn", className: "float-right-btn emj-btn" }),
          React.createElement("button", { type: "button", id: "dup-btn", className: "float-right-btn emj-btn" }),
          React.createElement(EmojiButton, { id: "gst", emoji: emoji.ghost })
        ),
        React.createElement(
          "div",
          { id: "filter-lists" },
          React.createElement(FilterList, { idt: "folder" }),
          React.createElement(FilterList, { idt: "tag" })
        )
      );
    }
  }]);

  return RightPane;
}(React.Component);

// let rightPaneContainer = document.querySelector('#right-pane-container');
// ReactDOM.render(<RightPane />, rightPaneContainer);