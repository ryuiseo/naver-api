import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface ChartProps {
  data: {
    period: string;
    ratio: number;
    group: string;
  }[];
  selectedAges: string[];
}

const Chart: React.FC<ChartProps> = ({ data, selectedAges }) => {
  const colors = [
    '#8884d8',
    '#82ca9d',
    '#ffc658',
    '#ff7300',
    '#a4de6c',
    '#d0ed57',
  ];
  const chartData = data.map((item) => {
    const chartItem: Record<string, any> = {
      date: item.period,
    };
    selectedAges.forEach((age) => {
      chartItem[age] = item.group === age ? item.ratio : 0;
    });
    return chartItem;
  });
  return (
    <ResponsiveContainer width="80%" height={600}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {selectedAges.map((age, index) => (
          <Line
            key={age}
            type="monotone"
            dataKey={age}
            stroke={colors[index % colors.length]}
            name={`${age}대`}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
