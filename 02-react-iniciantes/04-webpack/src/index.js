import ReactDom from 'react-dom';

import React from 'react';
//componente

function App() {
    return React.createElement('a', { href: 'https/www.origami.com' },'Origami');
}


ReactDom.render('Teste', document.getElementById('root'))