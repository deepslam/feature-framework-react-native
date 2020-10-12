import React from 'react';
import { View } from '@feature-framework/core';
export declare type ReactNavigationScreenType = {
    component: React.ReactElement;
    name: string;
    initialParams?: unknown;
};
export default class ReactNavigationScreen extends View<ReactNavigationScreenType> {
}