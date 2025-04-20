import React from 'react';
import { useLoaderData } from 'react-router';
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts';

const Chart = () => {
  const bookData = useLoaderData();
  const data = bookData.slice(0, 6);
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = props => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const renderChart = (
    <BarChart
      width={1000}
      height={400}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis
        dataKey="bookName"
        interval={0}
        tickMargin={0}
        height={50}
        label={{
          value: 'Books To Read',
          position: 'insideBottom',
          offset: -15,
          style: { textAnchor: 'middle', fontWeight: 'bold' },
        }}
        tick={{
          angle: 0,
          dx: -5,
          dy: 10,
          fontSize: 12,
          fontWeight: 'bold',
        }}
      />
      <YAxis
        dataKey=""
        tickMargin={5}
        height={50}
        label={{
          value: 'Pages To Read',
          angle: -90,
          position: 'insideLeft',
          offset: 5,
          style: { textAnchor: 'middle', fontWeight: 'bold' },
        }}
      />
      <Bar
        dataKey="totalPages"
        fill="#8884d8"
        shape={<TriangleBar />}
        label={{ position: 'top' }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
  return (
    <div className="w-11/12 mx-auto my-8 bg-gray-200 md:p-8 rounded-lg flex justify-center">
      {renderChart}
    </div>
  );
};

export default Chart;
