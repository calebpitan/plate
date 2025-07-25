import type React from 'react';

import type { Editor, TLocation } from 'platejs';

import { getBoundingClientRect } from './getBoundingClientRect';

export type VirtualRef = React.RefObject<Pick<
  HTMLElement,
  'getBoundingClientRect'
> | null>;

export const createVirtualRef = (
  editor: Editor,
  at?: TLocation | TLocation[],
  {
    fallbackRect,
  }: {
    fallbackRect?: ClientRect;
  } = {}
): VirtualRef => ({
  current: {
    getBoundingClientRect: () => {
      const rect = getBoundingClientRect(editor, at) || fallbackRect;

      if (!rect) {
        throw new Error(
          'Could not get the bounding client rect of the location. Please provide a fallbackRect.'
        );
      }

      return rect;
    },
  },
});
