import { Card } from "react-bootstrap";
import { BarChart } from "../../components/Chart/ChartJs";

const mock = {
  labels: ['January', 'Febuary', 'March', 'April', 'May', 'June'],
  datasets: [{
    label: 'Github Commits',
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1
  }]
};

const BarChartView = () => {

  return (
    <Card>
      <Card.Header>Bar Chart</Card.Header>
      <Card.Body>
        <BarChart data={mock} width={100} height={50} />
      </Card.Body>
    </Card>
  )
};

export default BarChartView;