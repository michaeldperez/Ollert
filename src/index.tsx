 import * as React    from 'react';
 import * as ReactDOM from 'react-dom';
 import { Hello }     from './components/Hello';

//  require('file?name=[name].[ext]!../index.html');

 ReactDOM.render(
     <Hello compiler="TypeScript" framework="React" />,
     document.getElementById('example')
 );
