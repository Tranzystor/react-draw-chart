import React from 'react';
import { storiesOf } from '@storybook/react';
import Bar from './Bar';

const data = [
  { key: 'E', value: 0.12702 },
  { key: 'T', value: 0.09056 },
  { key: 'A', value: 0.08167 },
  { key: 'O', value: 0.07507 },
  { key: 'I', value: 0.06966 },
  { key: 'N', value: 0.06749 },
  { key: 'S', value: 0.06327 },
  { key: 'H', value: 0.06094 },
  { key: 'R', value: 0.05987 },
  { key: 'D', value: 0.04253 },
  { key: 'L', value: 0.04025 },
  { key: 'C', value: 0.02782 },
  { key: 'U', value: 0.02758 },
  { key: 'M', value: 0.02406 },
  { key: 'W', value: 0.0236 },
  { key: 'F', value: 0.02288 },
  { key: 'G', value: 0.02015 },
  { key: 'Y', value: 0.01974 },
  { key: 'P', value: 0.01929 },
  { key: 'B', value: 0.01492 },
  { key: 'V', value: 0.00978 },
  { key: 'K', value: 0.00772 },
  { key: 'J', value: 0.00153 },
  { key: 'X', value: 0.0015 },
  { key: 'Q', value: 0.00095 },
  { key: 'Z', value: 0.00074 }
];

storiesOf('Bar', module).add('Bar', () => <Bar data={data} />);
