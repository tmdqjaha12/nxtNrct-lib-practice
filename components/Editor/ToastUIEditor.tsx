import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { LegacyRef } from "react";

import { EditorType } from "@toast-ui/editor/types";

interface ToastUIEditorProps {
  editorRef: LegacyRef<Editor> | undefined;
  onFocusEditor: ((editorType: EditorType) => void) | undefined;
}

const ToastUIEditor = ({ editorRef, onFocusEditor }: ToastUIEditorProps) => {
  return (
    <Editor
      initialValue="hello react editor world!"
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
      ref={editorRef}
      onFocus={onFocusEditor}
    />
  );
};

export default ToastUIEditor;
