/** 
 * @flow strict
 * @generated
 * @nolint
 */
/* eslint-disable */
// $FlowExpectedError: Reason checked type sufficiently
type $any = any;

// $FlowExpectedError: Reason checked type sufficiently
const HooksBS = require('./Hooks.bs');

// flowlint-next-line nonstrict-import:off
import type {reactElement as ReasonReact_reactElement} from '../src/shims/ReactShim.shim';

export type vehicle = {| +name: string |};

// Type annotated function components are not checked by Flow, but typeof() works.
const make$$forTypeof = function (_: {| +vehicle: vehicle |}) : ReasonReact_reactElement { return null };

const make: typeof(make$$forTypeof) = function Hooks(Arg1: $any) {
  const result = HooksBS.make({vehicle:[Arg1.vehicle.name]});
  return result
};;
exports.make = make

// Type annotated function components are not checked by Flow, but typeof() works.
const $$default$$forTypeof = function (_: {| +vehicle: vehicle |}) : ReasonReact_reactElement { return null };

const $$default: typeof($$default$$forTypeof) = function Hooks(Arg1: $any) {
  const result = HooksBS.default({vehicle:[Arg1.vehicle.name]});
  return result
};;
exports.$$default = $$default

exports.default = $$default;
