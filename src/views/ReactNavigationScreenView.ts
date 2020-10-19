import { IView } from '@feature-framework/core';

export type ReactNavigationScreenType = {
  component: React.ComponentType<any>;
  name: string;
  initialParams?: unknown;
};

export class ReactNavigationScreenView
  implements IView<ReactNavigationScreenType> {
  [key: string]: ReactNavigationScreenType;
}
