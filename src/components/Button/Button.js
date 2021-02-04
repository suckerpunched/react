/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Button as RebassButton } from "rebass";

export default function Button(props) {
  return (
    <RebassButton 
      bg='primary'
      {...props}
    >{props.children}</RebassButton>
  );
}
