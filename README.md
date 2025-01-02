Title : Indian Agriculture Analytics

# Overview

Indian Agriculture Analytics is a web-based application that visualizes agricultural data from 1950 to 2020.
The project includes two main features:

Yearly Crop Analysis: Displays the crops with maximum and minimum production each year.

Crop Averages: Visualizes the average yield of various crops in a bar chart.

## Features

Yearly Crop Analysis

Displays a table showing the crop with the highest and lowest production for each year.

Built using Mantine's Table component.

Crop Averages

A bar chart that visualizes the average yield (Kg/Ha) of various crops.

Created using ECharts for rich and interactive data visualization.

### Installation

Prerequisites

Ensure you have the following installed on your system:

Node.js (v14 or higher)

npm (Node Package Manager)

Steps

Clone this repository:

git clone https://github.com/your-repo/indian-agriculture-analytics.git
cd indian-agriculture-analytics

Install the dependencies:

npm install

Usage

Start the development server:

npm start

Open your browser and visit:

http://localhost:3000

#### Components

1. YearlyTable

File: YearTable.tsx

Displays a table with:

Year

Crop with maximum production

Crop with minimum production

Built with Mantine's Table component.

2. AverageTable

File: AverageTable.tsx

Displays a bar chart showing the average yield of various crops.

Built using the ECharts library.

3. App

File: App.tsx

Integrates YearlyTable and AverageTable components.

Processes the dataset using utility functions.

### Dependencies

Core

React: ^18.0.0

Mantine Core: ^7.0.0

ECharts: ^5.4.2
