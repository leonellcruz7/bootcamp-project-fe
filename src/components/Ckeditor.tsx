import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Ckeditor({ body, setBody }: any) {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: [
          "bold",
          "italic",
          "link",
          "|",
          "numberedList",
          "bulletedList",
          "list",
          "|",
          "undo",
          "redo",
        ],
      }}
      data={body}
      onReady={(editor: any) => {
        // You can store the "editor" and use when it is needed.
        console.log("Editor is ready to use!", editor);
      }}
      onChange={(event: any, editor: any) => {
        const data = editor.getData();
        setBody(data);
      }}
      onBlur={(event: any, editor: any) => {
        console.log("Blur.", editor);
      }}
      onFocus={(event: any, editor: any) => {
        console.log("Focus.", editor);
      }}
    />
  );
}
