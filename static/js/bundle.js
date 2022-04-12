(function (React, ReactDOM) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

    const width = 960;
    const height = 500;
    const circleRadius = 30;
    const initialMousePosition = {
      x: width / 2,
      y: height / 2
    };

    const App = () => {
      const [mousePosition, setMousePosition] = React.useState(initialMousePosition);
      const handleMouseMove = React.useCallback(event => {
        const {
          clientX,
          clientY
        } = event;
        setMousePosition({
          x: clientX,
          y: clientY
        });
      }, [setMousePosition]);
      return /*#__PURE__*/React__default["default"].createElement("svg", {
        width: width,
        height: height,
        onMouseMove: handleMouseMove
      }, /*#__PURE__*/React__default["default"].createElement("circle", {
        cx: mousePosition.x,
        cy: mousePosition.y,
        r: circleRadius
      }));
    };

    const rootElement = document.getElementById("root");
    ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(App, null), rootElement);

})(React, ReactDOM);
//# sourceMappingURL=bundle.js.map
