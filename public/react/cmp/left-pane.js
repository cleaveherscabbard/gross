'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_React$Component) {
  _inherits(Content, _React$Component);

  function Content(props) {
    _classCallCheck(this, Content);

    var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

    console.log(props);
    return _this;
  }

  _createClass(Content, [{
    key: "render",
    value: function render() {
      return React.createElement("img", {
        id: "content"
        // src={'/images/' + this.props.img_id}
      });
    }
  }]);

  return Content;
}(React.Component);

var ContentData = function (_React$Component2) {
  _inherits(ContentData, _React$Component2);

  function ContentData() {
    _classCallCheck(this, ContentData);

    return _possibleConstructorReturn(this, (ContentData.__proto__ || Object.getPrototypeOf(ContentData)).apply(this, arguments));
  }

  _createClass(ContentData, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "horizontal-list box", id: "data" },
        React.createElement("div", { id: "urldata" }),
        React.createElement("div", { id: "img-tags" })
      );
    }
  }]);

  return ContentData;
}(React.Component);

var TagControls = function (_React$Component3) {
  _inherits(TagControls, _React$Component3);

  function TagControls() {
    _classCallCheck(this, TagControls);

    return _possibleConstructorReturn(this, (TagControls.__proto__ || Object.getPrototypeOf(TagControls)).apply(this, arguments));
  }

  _createClass(TagControls, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "tag-controls", className: "txt-ctrl" },
        React.createElement("input", { type: "text", id: "tag-txt" }),
        React.createElement(
          "button",
          { type: "button", id: "tag-btn" },
          "TAG"
        )
      );
    }
  }]);

  return TagControls;
}(React.Component);

var JumpControls = function (_React$Component4) {
  _inherits(JumpControls, _React$Component4);

  function JumpControls() {
    _classCallCheck(this, JumpControls);

    return _possibleConstructorReturn(this, (JumpControls.__proto__ || Object.getPrototypeOf(JumpControls)).apply(this, arguments));
  }

  _createClass(JumpControls, [{
    key: "render",
    value: function render() {
      React.createElement(
        "div",
        { id: "jmp-controls", className: "txt-ctrl" },
        React.createElement("input", { type: "text", name: "", value: "", id: "jmp-txt" }),
        React.createElement(
          "button",
          { type: "button", id: "jmp-btn" },
          "JUMP"
        )
      );
    }
  }]);

  return JumpControls;
}(React.Component);

var LeftPane = function (_React$Component5) {
  _inherits(LeftPane, _React$Component5);

  function LeftPane(props) {
    _classCallCheck(this, LeftPane);

    console.log("constructing left pane");
    return _possibleConstructorReturn(this, (LeftPane.__proto__ || Object.getPrototypeOf(LeftPane)).call(this, props));
  }

  _createClass(LeftPane, [{
    key: "renderFeedback",
    value: function renderFeedback() {
      return React.createElement("div", { id: "feedback" });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "pane", id: "left-pane" },
        React.createElement(Content, null),
        React.createElement(ContentData, null),
        React.createElement(TagControls, null)
      );
    }
  }]);

  return LeftPane;
}(React.Component);

// var leftPaneContainer = document.querySelector('#left-pane-container');
// ReactDOM.render(React.createElement(LeftPane, null), leftPaneContainer);
