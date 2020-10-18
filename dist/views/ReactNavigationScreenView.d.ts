/// <reference types="react" />
import { IView } from '@feature-framework/core';
export declare type ReactNavigationScreenType = {
    component: JSX.Element;
    name: string;
    initialParams?: unknown;
};
export declare class ReactNavigationScreenView implements IView<ReactNavigationScreenType> {
    [key: string]: ReactNavigationScreenType;
}
