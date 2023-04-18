import Chart from "../chart/Chart";
import { CHART_DATA_POINTS } from "../../util/Configs";
import { CloneDeep } from "react-lodash";

const ExpensesChart = ({ expenses }) => {
  const temp_chart_data_points = CHART_DATA_POINTS.map((e) =>
    JSON.parse(JSON.stringify(e))
  );

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    temp_chart_data_points[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={temp_chart_data_points} />;
};

export default ExpensesChart;
