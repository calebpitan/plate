'use client';

import * as React from 'react';

import { indentListItems, unindentListItems } from '@platejs/list-classic';
import {
  useListToolbarButton,
  useListToolbarButtonState,
} from '@platejs/list-classic/react';
import { IndentIcon, List, ListOrdered, OutdentIcon } from 'lucide-react';
import { KEYS } from 'platejs';
import { useEditorRef } from 'platejs/react';

import { ToolbarButton } from './toolbar';

export function ListToolbarButton({
  nodeType = KEYS.ulClassic,
  ...props
}: React.ComponentProps<typeof ToolbarButton> & {
  nodeType?: string;
}) {
  const state = useListToolbarButtonState({ nodeType });
  const { props: buttonProps } = useListToolbarButton(state);

  return (
    <ToolbarButton
      {...props}
      {...buttonProps}
      tooltip={nodeType === KEYS.ulClassic ? 'Bulleted List' : 'Numbered List'}
    >
      {nodeType === KEYS.ulClassic ? <List /> : <ListOrdered />}
    </ToolbarButton>
  );
}

export function IndentToolbarButton({
  reverse = false,
  ...props
}: React.ComponentProps<typeof ToolbarButton> & {
  reverse?: boolean;
}) {
  const editor = useEditorRef();

  return (
    <ToolbarButton
      {...props}
      onClick={() => {
        reverse ? unindentListItems(editor) : indentListItems(editor);
      }}
      tooltip={reverse ? 'Outdent' : 'Indent'}
    >
      {reverse ? <OutdentIcon /> : <IndentIcon />}
    </ToolbarButton>
  );
}
