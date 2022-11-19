import React from 'react';
import './style.scss';

import { Proposition } from './components/proposition.js';

const asdasd = {
  type: 0, //undefined, 0, 1, 2
  display_name: 'Olivia',
  tfb: [56, 21, 9],
  voted: [false, false, false],
  sentence: 'I am a child',
  child: [],
};

const propdata1 = {
  type: 1, //undefined, 0, 1, 2
  display_name: 'Wolfram',
  tfb: [56, 21, 9],
  voted: [false, false, false],
  sentence:
    'It seems like the kind of question that might have been already asked.',
  child: [asdasd, asdasd],
};

const propdata = {
  type: undefined, //undefined, 0, 1, 2
  display_name: 'Jeongjae Park',
  tfb: [56, 21, 9],
  voted: [false, false, false],
  sentence:
    'Applying simple rule over and over again produces really complicated result.',
  child: [propdata1, asdasd, propdata1],
};

export default function App() {
  return (
    <div className="feed">
      <Proposition data={propdata} />
      <Proposition data={asdasd} />
    </div>
  );
}
