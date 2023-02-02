"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/waitlist";
exports.ids = ["pages/api/waitlist"];
exports.modules = {

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "(api)/./src/pages/api/waitlist.js":
/*!***********************************!*\
  !*** ./src/pages/api/waitlist.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sgMail = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\nsgMail.setApiKey(process.env.CARDLY);\nasync function sendEmail(req, res) {\n    try {\n        await sgMail.send({\n            to: \"maximenef1@gmail.com\",\n            from: \"immersy.info@gmail.com\",\n            subject: \"Cardly: waiting liste \",\n            html: `<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n      <html lang=\"en\">\n      <head>\n        <meta charset=\"utf-8\">\n      \n        <title>The HTML5 Herald</title>\n        <meta name=\"description\" content=\"The HTML5 Herald\">\n        <meta name=\"author\" content=\"SitePoint\">\n      <meta http-equiv=\"Content-Type\" content=\"text/html charset=UTF-8\" />\n      \n        <link rel=\"stylesheet\" href=\"css/styles.css?v=1.0\">\n      \n      </head>\n      \n      <body>\n        <div class=\"img-container\" style=\"display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';\">              \n              </div>\n              <div class=\"container\" style=\"margin-left: 20px;margin-right: 20px; font-size: 16px;\">\n              <h2>Vous avez recu un e-mail de la part de :</h2>\n              <p style=\"color:blue; \"> ${req.body.firstName} <span>  ${req.body.lastName}</span></p>\n              <h2>  Voici mon E-mail :  </h2>\n              <p style=\"color:blue;\">✉️ ${req.body.email}</p>\n              \n              <br>\n\n              </div>\n      </body>\n      </html>`\n        });\n    } catch (error) {\n        return res.status(error.statusCode || 500).json({\n            error: error.message\n        });\n    }\n    return res.status(200).json({\n        error: \"\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendEmail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3dhaXRsaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUFTQyxtQkFBT0EsQ0FBQyxzQ0FBZ0I7QUFFdkNELE9BQU9FLFNBQVMsQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxNQUFNO0FBQ25DLGVBQWVDLFVBQVVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ2pDLElBQUk7UUFDRixNQUFNUixPQUFPUyxJQUFJLENBQUM7WUFDaEJDLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxTQUFTO1lBQ1RDLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FtQjBCLEVBQUVOLElBQUlPLElBQUksQ0FBQ0MsU0FBUyxDQUFDLFNBQVMsRUFBRVIsSUFBSU8sSUFBSSxDQUFDRSxRQUFRLENBQUM7O3dDQUVqRCxFQUFFVCxJQUFJTyxJQUFJLENBQUNHLEtBQUssQ0FBQzs7Ozs7O2FBTTVDLENBQUM7UUFDVjtJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU9WLElBQUlXLE1BQU0sQ0FBQ0QsTUFBTUUsVUFBVSxJQUFJLEtBQUtDLElBQUksQ0FBQztZQUFFSCxPQUFPQSxNQUFNSSxPQUFPO1FBQUM7SUFDekU7SUFFQSxPQUFPZCxJQUFJVyxNQUFNLENBQUMsS0FBS0UsSUFBSSxDQUFDO1FBQUVILE9BQU87SUFBRztBQUMxQztBQUVBLGlFQUFlWixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZGx5Ly4vc3JjL3BhZ2VzL2FwaS93YWl0bGlzdC5qcz8yNzU2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNnTWFpbCA9IHJlcXVpcmUoXCJAc2VuZGdyaWQvbWFpbFwiKTtcblxuc2dNYWlsLnNldEFwaUtleShwcm9jZXNzLmVudi5DQVJETFkpO1xuYXN5bmMgZnVuY3Rpb24gc2VuZEVtYWlsKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgc2dNYWlsLnNlbmQoe1xuICAgICAgdG86IFwibWF4aW1lbmVmMUBnbWFpbC5jb21cIiwgLy8gWW91ciBlbWFpbCB3aGVyZSB5b3UnbGwgcmVjZWl2ZSBlbWFpbHNcbiAgICAgIGZyb206IFwiaW1tZXJzeS5pbmZvQGdtYWlsLmNvbVwiLCAvLyB5b3VyIHdlYnNpdGUgZW1haWwgYWRkcmVzcyBoZXJlXG4gICAgICBzdWJqZWN0OiBcIkNhcmRseTogd2FpdGluZyBsaXN0ZSBcIixcbiAgICAgIGh0bWw6IGA8IURPQ1RZUEUgaHRtbCBQVUJMSUMgXCItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsLy9FTlwiIFwiaHR0cDovL3d3dy53My5vcmcvVFIveGh0bWwxL0RURC94aHRtbDEtdHJhbnNpdGlvbmFsLmR0ZFwiPlxuICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCI+XG4gICAgICBcbiAgICAgICAgPHRpdGxlPlRoZSBIVE1MNSBIZXJhbGQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGhlIEhUTUw1IEhlcmFsZFwiPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIlNpdGVQb2ludFwiPlxuICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWwgY2hhcnNldD1VVEYtOFwiIC8+XG4gICAgICBcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3Mvc3R5bGVzLmNzcz92PTEuMFwiPlxuICAgICAgXG4gICAgICA8L2hlYWQ+XG4gICAgICBcbiAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRhaW5lclwiIHN0eWxlPVwiZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO2JvcmRlci1yYWRpdXM6IDVweDtvdmVyZmxvdzogaGlkZGVuOyBmb250LWZhbWlseTogJ2hlbHZldGljYScsICd1aS1zYW5zJztcIj4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDIwcHg7bWFyZ2luLXJpZ2h0OiAyMHB4OyBmb250LXNpemU6IDE2cHg7XCI+XG4gICAgICAgICAgICAgIDxoMj5Wb3VzIGF2ZXogcmVjdSB1biBlLW1haWwgZGUgbGEgcGFydCBkZSA6PC9oMj5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9XCJjb2xvcjpibHVlOyBcIj4gJHtyZXEuYm9keS5maXJzdE5hbWV9IDxzcGFuPiAgJHtyZXEuYm9keS5sYXN0TmFtZX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICA8aDI+ICBWb2ljaSBtb24gRS1tYWlsIDogIDwvaDI+XG4gICAgICAgICAgICAgIDxwIHN0eWxlPVwiY29sb3I6Ymx1ZTtcIj7inInvuI8gJHtyZXEuYm9keS5lbWFpbH08L3A+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8YnI+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+YCxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhlcnJvci5zdGF0dXNDb2RlIHx8IDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZXJyb3I6IFwiXCIgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlbmRFbWFpbDtcbiJdLCJuYW1lcyI6WyJzZ01haWwiLCJyZXF1aXJlIiwic2V0QXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkNBUkRMWSIsInNlbmRFbWFpbCIsInJlcSIsInJlcyIsInNlbmQiLCJ0byIsImZyb20iLCJzdWJqZWN0IiwiaHRtbCIsImJvZHkiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwiZXJyb3IiLCJzdGF0dXMiLCJzdGF0dXNDb2RlIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/waitlist.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/waitlist.js"));
module.exports = __webpack_exports__;

})();