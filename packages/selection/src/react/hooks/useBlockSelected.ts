import { useElement, usePluginOption } from 'platejs/react';

import { BlockSelectionPlugin } from '../BlockSelectionPlugin';

export const useBlockSelected = (_id?: string) => {
  const { id } = useElement();

  const isBlockSelected = usePluginOption(
    BlockSelectionPlugin,
    'isSelected',
    _id ?? (id as string)
  );

  return isBlockSelected;
};
