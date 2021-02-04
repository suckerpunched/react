/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Switch as RebassSwitch} from '@rebass/forms'

import { useState } from 'react';

export default function Switch(props) {
  const [checked, setChecked] = useState(false);
  return (
    <RebassSwitch
      color='primary'
      
      {...props}

      onClick={()=>{
        setChecked(!checked)
        if (props.onClick) props.onClick(!checked)
      }}
      checked={checked}
    />
  );
}
