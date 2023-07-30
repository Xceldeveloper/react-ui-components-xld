import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { XThing, XButton, XInput, XGroupButton, XSelect } from '../dist';

const App = () => {
  const [value, setValue] = React.useState('');

  // get value from select and set to value
  const handleChange = (e:any) => {
    setValue(e.target.value);
  }


  return (
    <div>
      <XThing children={'Be prepared'} />

      <XButton label="Button" backgroundColor='yellow' size='medium' />

      <XButton label="Overcomer is coming" backgroundColor='red' size='large' />

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
