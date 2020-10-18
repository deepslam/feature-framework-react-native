import React from 'react';
import { View } from '@feature-framework/core';

export type ReactNavigationScreenType = {
  component: React.ReactElement;
  name: string;
  initialParams?: unknown;
};

export default abstract class ReactNavigationScreen extends View<
  ReactNavigationScreenType
> {
  abstract readonly components: Record<string, ReactNavigationScreenType>;
}
