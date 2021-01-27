/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Text as RebassText } from "rebass";

export default function Text(props) {
  return (
    <RebassText 
      fontSize={[ 3, 5, 7 ]}
      fontWeight='bold'
      color='primary'

      {...props}
    >{props.children}</RebassText>
  );
}
