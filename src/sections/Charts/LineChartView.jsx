import { Card } from "react-bootstrap";
import { LineChart } from "../../components/Chart/ChartJs";

const mock = {
  labels: ['January', 'Febuary', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)'
    },
    {
      label: 'Dataset 2',
      data: [2, 3, 20, 5, 1, 4],
      borderWidth: 1,
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)'
    }
  ]
};


const LineChartView = () => {

  return (
    <Card>
      <Card.Header>Line Chart</Card.Header>
      <Card.Body>
        <LineChart data={mock} width={100} height={50} />
      </Card.Body>
    </Card>
  )
};

export default LineChartView;