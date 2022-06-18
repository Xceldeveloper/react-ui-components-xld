import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { XThing, XButton, XInput } from '../';

const App = () => {
  return (
    <div>
      <XThing children={'Be prepared'} />

      <XButton label="Button" backgroundColor='yellow' size='medium' />

      <XButton label="Overcomer is coming" backgroundColor='red' size='large' />

      <XInput label="Input" type="text" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
