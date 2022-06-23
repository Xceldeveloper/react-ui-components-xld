import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { XThing, XInput, XGroupButton, XSelect, ButtonProps, XButton } from '../dist';

const App = () => {
  const [value, setValue] = React.useState('');

  // get value from select and set to value
  const handleChange = (e:any) => {
    setValue(e.target.value);
  }

  const buttonStyle: ButtonProps = {
    label:'sss',
    borderRadius:'5px',
    backgroundColor:'green',
    style:{
      cursor:'pointer'
    },
  }


  return (
    <div>
      <XThing children={'Be prepared'} />

      <XButton label="Button" backgroundColor='yellow' size='medium' />

      <XButton {...buttonStyle}  size='large' />

      <XInput label="Input" type="text" />

      <XGroupButton label="Group Button" backgroundColor='green' size='large' />

       <XSelect style={{minWidth:'200px',padding:'5px 10px'}} options={['Boy','Girl']} onChange={handleChange} />
       <br />
       <hr />
       {value}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
