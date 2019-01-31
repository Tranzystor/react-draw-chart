import React from 'react';
import PropTypes from 'prop-types';
import { scaleBand, scaleLinear } from 'd3-scale';
import _ from 'lodash';

// #6534ff
// #bbc4ef
const background = '#fccdd3';
const barColor = '#62bcfa';

const Bar = ({ data }) => {
  const width = 600;
  const height = 400;

  const xScale = scaleBand()
    .range([0, width])
    .domain(data.map(elem => elem.key))
    .padding(0.1);
  const barWidth = xScale.bandwidth();

  const maxValObj = _.maxBy(data, o => o.value);
  const yScale = scaleLinear()
    .range([height, 0])
    .domain([0, maxValObj.value]);

  const result = data.map(x => {
    const xAttr = xScale(x.key);
    const yAttr = yScale(x.value);
    const barHeight = height - yAttr;

    return (
      <rect
        key={x.key}
        x={xAttr}
        y={yAttr}
        height={barHeight}
        width={barWidth}
        style={{ fill: barColor }}
      />
    );
  });

  return (
    <svg width={width} height={height} style={{ background }}>
      <g>{result}</g>
    </svg>
  );
};

Bar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })
  ).isRequired
};

Bar.defaultProps = {
  data: []
};

export default Bar;
