import type { AnyObject, Nullable } from '@udecode/utils';

import type { SlateEditor } from '../../../editor';
import type { HtmlDeserializer } from '../../../plugin/SlatePlugin';

import { pluginDeserializeHtml } from './pluginDeserializeHtml';

export const pipeDeserializeHtmlElement = (
  editor: SlateEditor,
  element: HTMLElement
) => {
  let result: (Nullable<HtmlDeserializer> & { node: AnyObject }) | undefined;

  [...editor.meta.pluginList].reverse().some((plugin) => {
    result = pluginDeserializeHtml(editor, plugin, { element });

    return !!result;
  });

  return result;
};
