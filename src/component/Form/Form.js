/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box as RebassBox } from "rebass";

export default function Form(props) {
  return (
    <RebassBox 
      as='form'
      {...props}
      onSubmit={e => {
        e.preventDefault();
        var data = new FormData(e.target);
        props.onSubmit(data)
      }}
    >{props.children}</RebassBox>
  );
}
