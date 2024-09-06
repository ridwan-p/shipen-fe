import { Card } from "react-bootstrap";
import { DoughnutChart } from "../../components/Chart/ChartJs";

const mock = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)'
    ],
    borderWidth: 1
  }]
};


const DoughnutChartView = () => {

  return (
    <Card>
      <Card.Header>Doughnut Chart</Card.Header>
      <Card.Body>
        <DoughnutChart data={mock} width={100} height={50} />
      </Card.Body>
    </Card>
  )
};

export default DoughnutChartView;