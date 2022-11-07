"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFontColor = exports.CustomBackgroundColor = exports.Tertiary = exports.Secondary = exports.AllCapitalizations = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ui_1 = require("../../../components/ui");
var LabelStories = {
    title: 'Components/UI/Label',
    component: ui_1.Label,
    argTypes: {
        color: { control: 'select' },
        fontColor: { control: 'color' },
        size: { control: 'select' }
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(ui_1.Label, __assign({}, args)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: 'normal',
    text: 'Basic'
};
exports.AllCapitalizations = Template.bind({});
exports.AllCapitalizations.args = {
    allCapitalize: true,
    text: 'all capitalizations'
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    color: 'secondary',
    text: 'Secondary'
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    color: 'tertiary',
    text: 'Tertiary'
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    backgroundColor: '#000000',
    fontColor: '#FFFFFF',
    size: 'h1',
    text: 'Custom Background Color'
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    fontColor: '#5517AC',
    size: 'h1',
    text: 'Custom Font Color'
};
exports.default = LabelStories;
