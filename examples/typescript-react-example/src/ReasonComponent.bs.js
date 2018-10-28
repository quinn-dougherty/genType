// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var MyBannerWrapper = require("./MyBannerWrapper.bs.js");

var component = ReasonReact.statelessComponent("ReasonComponent");

function onClick(param) {
  console.log("click");
  return /* () */0;
}

function make($staropt$star, person, $staropt$star$1, _children) {
  var message = $staropt$star !== undefined ? $staropt$star : "default message";
  var intList = $staropt$star$1 !== undefined ? $staropt$star$1 : /* :: */[
      0,
      /* [] */0
    ];
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              return React.createElement("div", {
                          className: "App",
                          onClick: onClick
                        }, "ReasonReact " + (message + (" and intList: " + ($$String.concat(",", List.map((function (i) {
                                          return String(i);
                                        }), intList)) + (" and person name: " + person[/* name */0])))), ReasonReact.element(undefined, undefined, MyBannerWrapper.make(true, /* record */[/* text */"this is from ReasonComponent"], /* array */[])));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

function minus($staropt$star, second) {
  var first = $staropt$star !== undefined ? $staropt$star : 0;
  return first - second | 0;
}

function useTypeDefinedInAnotherModule(x) {
  return x;
}

function tToString(t) {
  if (typeof t === "number") {
    return "A";
  } else if (t.tag) {
    return "C(" + (t[0] + ")");
  } else {
    return "B(" + (String(t[0]) + ")");
  }
}

function useRecordsCoord(param) {
  return param[/* x */0] + param[/* y */1] | 0;
}

exports.component = component;
exports.onClick = onClick;
exports.make = make;
exports.minus = minus;
exports.useTypeDefinedInAnotherModule = useTypeDefinedInAnotherModule;
exports.tToString = tToString;
exports.useRecordsCoord = useRecordsCoord;
/* component Not a pure module */
