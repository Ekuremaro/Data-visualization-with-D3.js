import React from 'react';
import { useD3 } from './hooks/useD3';
import * as d3 from 'd3';
const ChartPage = () => {
  const data = [
    { year: 1980, efficiency: 24.3, sales: Math.random() * 10000000 },
    { year: 1985, efficiency: 27.6, sales: Math.random() * 10000000 },
    { year: 1990, efficiency: 28, sales: Math.random() * 10000000 },
    { year: 1991, efficiency: 28.4, sales: Math.random() * 10000000 },
    { year: 1992, efficiency: 27.9, sales: Math.random() * 10000000 },
    { year: 1993, efficiency: 28.4, sales: Math.random() * 10000000 },
    { year: 1994, efficiency: 28.3, sales: Math.random() * 10000000 },
    { year: 1995, efficiency: 28.6, sales: Math.random() * 10000000 },
    { year: 1996, efficiency: 28.5, sales: Math.random() * 10000000 },
    { year: 1997, efficiency: 28.7, sales: Math.random() * 10000000 },
    { year: 1998, efficiency: 28.8, sales: Math.random() * 10000000 },
    { year: 1999, efficiency: 28.3, sales: Math.random() * 10000000 },
    { year: 2000, efficiency: 28.5, sales: Math.random() * 10000000 },
    { year: 2001, efficiency: 28.8, sales: Math.random() * 10000000 },
    { year: 2002, efficiency: 29, sales: Math.random() * 10000000 },
    { year: 2003, efficiency: 29.5, sales: Math.random() * 10000000 },
    { year: 2004, efficiency: 29.5, sales: Math.random() * 10000000 },
    { year: 2005, efficiency: 30.3, sales: Math.random() * 10000000 },
    { year: 2006, efficiency: 30.1, sales: Math.random() * 10000000 },
    { year: 2007, efficiency: 31.2, sales: Math.random() * 10000000 },
    { year: 2008, efficiency: 31.5, sales: Math.random() * 10000000 },
    { year: 2009, efficiency: 32.9, sales: Math.random() * 10000000 },
    { year: 2010, efficiency: 33.9, sales: Math.random() * 10000000 },
    { year: 2011, efficiency: 33.1, sales: Math.random() * 10000000 },
    { year: 2012, efficiency: 35.3, sales: Math.random() * 10000000 },
    { year: 2013, efficiency: 36.4, sales: Math.random() * 10000000 },
    { year: 2014, efficiency: 36.5, sales: Math.random() * 10000000 },
    { year: 2015, efficiency: 37.2, sales: Math.random() * 10000000 },
    { year: 2016, efficiency: 37.7, sales: Math.random() * 10000000 },
    { year: 2017, efficiency: 39.4, sales: Math.random() * 10000000 },
  ];

  const ref = useD3(
    (svg) => {
      const height = 500;
      const width = 1000;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.year))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);

      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.sales)])
        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g) =>
        g.attr('transform', `translate(0,${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            .tickValues(
              d3
                .ticks(...d3.extent(x.domain()), width / 40)
                .filter((v) => x(v) !== undefined)
            )
            .tickSizeOuter(0)
        );

      const y1Axis = (g) =>
        g
          .attr('transform', `translate(${margin.left},0)`)
          .style('color', 'steelblue')
          .call(d3.axisLeft(y1).ticks(null, 's'))
          .call((g) => g.select('.domain').remove())
          .call((g) =>
            g
              .append('text')
              .attr('x', -margin.left)
              .attr('y', 10)
              .attr('fill', 'currentColor')
              .attr('text-anchor', 'start')
              .text(data.y1)
          );

      svg.select('.x-axis').call(xAxis);
      svg.select('.y-axis').call(y1Axis);

      svg
        .select('.plot-area')
        .attr('fill', 'steelblue')
        .selectAll('.bar')
        .data(data)
        .join('rect')
        .attr('class', 'bar')
        .attr('x', (d) => x(d.year))
        .attr('width', x.bandwidth())
        .attr('y', (d) => y1(d.sales))
        .attr('height', (d) => y1(0) - y1(d.sales));
    },
    [data.length]
  );
  return (
    <svg
      ref={ref}
      style={{
        height: 500,
        width: '100%',
        marginRight: '0px',
        marginLeft: '0px',
      }}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
};

export default ChartPage;
