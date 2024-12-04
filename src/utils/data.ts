import data from "../Manufac_India_Agro_Dataset.json";

export interface CropData {
  Year: string;
  CropName: string;
  CropProduction: number;
  Yield: number;
  Area: number;
}

export const processDataset = () => {
  const processedData: CropData[] = (data as any[]).map((item) => ({
    Year: item.Year,
    CropName: item["Crop Name"],
    CropProduction: parseFloat(item["Crop Production (UOM:t(Tonnes))"]) || 0,
    Yield:
      parseFloat(item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) || 0,
    Area: parseFloat(item["Area Under Cultivation (UOM:Ha(Hectares))"]) || 0,
  }));
  console.log(processedData);
  return processedData;
};

export const calculateYearlyData = (data: CropData[]) => {
  const yearlyData: { year: string; maxCrop: string; minCrop: string }[] = [];
  const groupedData = data.reduce((acc, curr) => {
    if (!acc[curr.Year]) acc[curr.Year] = [];
    acc[curr.Year].push(curr);
    return acc;
  }, {} as Record<string, CropData[]>);

  Object.entries(groupedData).forEach(([year, crops]) => {
    const maxCrop = crops.reduce(
      (max, crop) => (crop.CropProduction > max.CropProduction ? crop : max),
      crops[0]
    );
    const minCrop = crops
      .filter((crop) => crop.CropProduction > 0)
      .reduce(
        (min, crop) => (crop.CropProduction < min.CropProduction ? crop : min),
        crops[0]
      );
    yearlyData.push({
      year,
      maxCrop: maxCrop.CropName,
      minCrop: minCrop.CropName,
    });
  });

  return yearlyData;
};

export const calculateCropAverages = (data: CropData[]) => {
  const averages: { crop: string; avgYield: number; avgArea: number }[] = [];
  const groupedData = data.reduce((acc, curr) => {
    if (!acc[curr.CropName]) acc[curr.CropName] = [];
    acc[curr.CropName].push(curr);
    return acc;
  }, {} as Record<string, CropData[]>);

  Object.entries(groupedData).forEach(([crop, crops]) => {
    const avgYield = crops.reduce((sum, c) => sum + c.Yield, 0) / crops.length;
    const avgArea = crops.reduce((sum, c) => sum + c.Area, 0) / crops.length;
    averages.push({
      crop,
      avgYield: parseFloat(avgYield.toFixed(3)),
      avgArea: parseFloat(avgArea.toFixed(3)),
    });
  });

  return averages;
};
