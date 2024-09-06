import { useCallback, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { Chart } from "chart.js";

export const ChartComponent = ({
  width = 400,
  height = 400,
  type,
  data,
  options,
  plugins,
  updateMode = 'none'
}) => {
  const chartInstance = useRef({
    destroy: () => { },
    update: () => { }
  });

  const nodeRef = useCallback(node => {
    destoryChart(); // destroy previous chart

    if (node === null) return;

    const chart = new Chart(node, {
      type: type,
      data: data,
      options: options,
      plugins: plugins
    });
    chartInstance.current = chart;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      destoryChart();
    };
  }, []);

  useEffect(() => {
    chartInstance.current.data = data;
    chartInstance.current.options = options;
    chartInstance.current.update(updateMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, options]);

  const destoryChart = () => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
  };

  return (
    <canvas
      ref={nodeRef}
      width={width}
      height={height}
    ></canvas>
  )
}

ChartComponent.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string,
  data: PropTypes.object,
  options: PropTypes.object,
  plugins: PropTypes.array,
  updateMode: PropTypes.oneOf(['active', 'hide', 'resize', 'reset', 'show', 'none'])
};

ChartComponent.register = Chart.register;

export const BarChart = (props) => <ChartComponent type="bar" {...props} />;
export const LineChart = (props) => <ChartComponent type="line" {...props} />;
export const DoughnutChart = (props) => <ChartComponent type="doughnut" {...props} />;
export const PieChart = (props) => <ChartComponent type="pie" {...props} />;
export const PolarChart = (props) => <ChartComponent type="polarArea" {...props} />;
export const RadarChart = (props) => <ChartComponent type="radar" {...props} />;
