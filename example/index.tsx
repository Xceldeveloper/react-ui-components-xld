import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing, Button } from '../dist';

const App = () => {
  return (
    <div>
      <Thing children={'Be prepared'} />

      <Button label="Button" backgroundColor='yellow' size='medium' />

      <Button label="Overcomer is coming" backgroundColor='red' size='large' />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
