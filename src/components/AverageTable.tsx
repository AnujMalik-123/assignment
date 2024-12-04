import { Table } from "@mantine/core";

interface AverageData {
  crop: string;
  avgYield: number;
  avgArea: number;
}

export const AverageTable = ({ data }: { data: AverageData[] }) => {
  const rows = data.map((row, idx) => (
    <Table.Tr key={idx}>
      <Table.Td>{row.crop}</Table.Td>
      <Table.Td>{row.avgYield}</Table.Td>
      <Table.Td>{row.avgArea}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Crop</Table.Th>
          <Table.Th>Average Yield (Kg/Ha)</Table.Th>
          <Table.Th>Average Area (Ha)</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
