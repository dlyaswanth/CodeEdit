import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-cobalt.js";
import "ace-builds/src-noconflict/theme-monokai.js";
import "ace-builds/src-noconflict/theme-eclipse.js";
import styles from "./Editors.module.css";
export const TextEditor=(props)=>{
    return <Editor mode="text" title={"Notes"} theme={"eclipse"} {...props} />;
}
export const JavascriptEditor = (props) => {
  return <Editor mode="javascript" title={"JS"} theme={"cobalt"} {...props} />;
};
export const HtmlEditor = (props) => {
  return <Editor mode="html" title={"HTML"} theme={"cobalt"} {...props} />;
};
export const CssEditor = (props) => {
  return <Editor mode="css" title={"CSS"} theme={"cobalt"} {...props} />;
};
const Editor = ({ mode, onChange, value, title, height ,theme}) => {
  return  (
    <div className={styles.editorContainer}>
      <div className={styles.editorTitle}>{title}</div>
      <AceEditor 
        mode={mode}
        name={title}
        theme={theme}
        onChange={onChange}
        fontSize={16}
        width={"100%"}
        height={height}
        value={value}
        showPrintMargin={true}
        showGutter={true}
        tabSize={2}
        setOptions={{ useWorker: false }}
      />
    </div>
  );
};
