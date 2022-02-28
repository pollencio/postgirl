import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { JSONEditor } from 'svelte-jsoneditor/dist/jsoneditor.js';

export default function SvelteJSONEditor(props) {
  const editor = useRef(null);

  // create editor
  const onRef = (ref) => {
    if (ref && !editor.current) {
      editor.current = new JSONEditor({
        target: ref,
        props,
      });
    }
  };

  // update props
  useEffect(() => {
    if (editor.current) {
      editor.current.updateProps(props);
    }
  }, [props]);

  // destroy editor
  useEffect(() => {
    return () => {
      if (editor.current) {
        editor.current.destroy();
        editor.current = null;
      }
    };
  }, []);

  return <StyeldEditor ref={onRef}></StyeldEditor>;
}

const StyeldEditor = styled.div`
  height: 100%;
  width: 100%;
`;
