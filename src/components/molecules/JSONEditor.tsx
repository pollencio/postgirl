// import { useEffect, useRef } from "react";
import styled from 'styled-components';
import { JsonEditorProps } from 'svelte-jsoneditor/components/JSONEditor.svelte';
// import { JSONEditor } from "svelte-jsoneditor/dist/jsoneditor.js";

function SvelteJSONEditor(props: JsonEditorProps) {
  // const editor = useRef<HTMLDivElement>(null);

  // create editor
  // const onRef = (ref: React.MutableRefObject<HTMLDivElement>) => {
  //   if (ref && !editor.current) {
  //     editor.current = new JSONEditor({
  //       target: ref,
  //       props,
  //     });
  //   }
  // };

  // // update props
  // useEffect(() => {
  //   if (editor.current) {
  //     editor.current.updateProps(props);
  //   }
  // }, [props]);

  // // destroy editor
  // useEffect(() => {
  //   return () => {
  //     if (editor.current) {
  //       editor.current.destroy();
  //       editor.current = null;
  //     }
  //   };
  // }, []);

  // return <StyeldEditor ref={onRef}></StyeldEditor>;
  return <StyeldEditor>Here goes the editor</StyeldEditor>;
}

const StyeldEditor = styled.div`
  height: 100%;
  width: 100%;
`;

export default SvelteJSONEditor;
