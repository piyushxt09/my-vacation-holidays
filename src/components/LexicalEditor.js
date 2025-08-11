'use client';

import { useEffect } from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html';
import { $getRoot } from 'lexical';

function HtmlLoaderPlugin({ html }) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!html) return;

    editor.update(() => {
      const parser = new DOMParser();
      const dom = parser.parseFromString(html, 'text/html');
      const nodes = $generateNodesFromDOM(editor, dom);
      const root = $getRoot();
      root.clear();
      root.append(...nodes);
    });
  }, [html, editor]);

  return null;
}

export default function LexicalEditor({ value, onChange, placeholder }) {
  const initialConfig = {
    namespace: 'MyEditor',
    theme: {},
    onError: (error) => console.error(error),
  };

  const handleEditorChange = (editorState, editor) => {
    editorState.read(() => {
      const html = $generateHtmlFromNodes(editor, null);
      onChange(html);
    });
  };

  return (
    <div className="border rounded p-2 min-h-[150px] bg-white">
      <LexicalComposer initialConfig={initialConfig}>
        <HtmlLoaderPlugin html={value} />
        <RichTextPlugin
          contentEditable={<ContentEditable className="prose focus:outline-none min-h-[150px]" />}
          placeholder={<p className="text-gray-400">{placeholder || 'Start writing...'}</p>}
        />
        <HistoryPlugin />
        <OnChangePlugin onChange={handleEditorChange} />
      </LexicalComposer>
    </div>
  );
}
