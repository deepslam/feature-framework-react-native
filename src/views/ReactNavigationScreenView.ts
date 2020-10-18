import { IView } from '@feature-framework/core';

export type ReactNavigationScreenType = {
  component: JSX.Element;
  name: string;
  initialParams?: unknown;
};

export class ReactNavigationScreenView
  implements IView<ReactNavigationScreenType> {
  [key: string]: ReactNavigationScreenType;
}
