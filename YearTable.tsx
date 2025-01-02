import { Table } from "@mantine/core";

interface YearlyData {
  year: string;
  maxCrop: string;
  minCrop: string;
}

export const YearlyTable = ({ data }: { data: YearlyData[] }) => {
  const rows = data.map((row, idx) => (
    <tr key={idx}>
      <td>{row.year}</td>
      <td>{row.maxCrop}</td>
      <td>{row.minCrop}</td>
    </tr>
  ));

  return (
    <Table
      striped
      highlightOnHover
      withTableBorder
      withColumnBorders
      horizontalSpacing="md"
      verticalSpacing="sm"
    >
      <thead>
        <tr>
          <th>Year</th>
          <th>Crop with Maximum Production</th>
          <th>Crop with Minimum Production</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
