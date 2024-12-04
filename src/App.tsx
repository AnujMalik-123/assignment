import { Container } from "@mantine/core";
// import "./index.css";
import {
  processDataset,
  calculateYearlyData,
  calculateCropAverages,
} from "./utils/data";
import { YearlyTable } from "./components/YearTable";
import { AverageTable } from "./components/AverageTable";

function App() {
  const data = processDataset();
  const yearlyData = calculateYearlyData(data);
  const averageData = calculateCropAverages(data);

  return (
    <Container>
      <h1>Indian Agriculture Analytics</h1>
      <h2>Yearly Crop Analysis</h2>
      <YearlyTable data={yearlyData} />
      <h2>Crop Averages (1950-2020)</h2>
      <AverageTable data={averageData} />
    </Container>
  );
}

export default App;
