import React, {useState, useContext} from 'react';
import {ColorBlue, ColorBlack} from './variables';

export const Theme = {
    dark: true
}

export const ColorPrimary = () => {
    return (Theme.dark ? ColorBlue : "");
}

export const ColorSecondary = () => {
    return (Theme.dark ? ColorBlack : "");
}