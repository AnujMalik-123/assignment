![AverageTable](https://github.com/user-attachments/assets/33616766-ddab-457f-afed-4bbabf86a133)
![YearTable](https://github.com/user-attachments/assets/4e2945bb-cbcd-4090-83e0-23cce6df2d0a)

This project is a web-based application to perform analytics on the Indian Agriculture dataset. It uses TypeScript, Vite, and Mantine v7 to display aggregated data in tabular format. The app computes and shows yearly and average agricultural statistics such as production, yield, and cultivation area for different crops.

Features
1) Yearly Data Table: Displays the crop with the maximum and minimum production for each year (1950–2020).
2) Average Data Table: Shows average crop yield and cultivation area (1950–2020).
3) Built with Modern Tools: Developed using TypeScript, Vite, and Mantine v7 for high performance and responsiveness.

Step 1: Clone the Repository
Step 2: Install Dependencies
Step 3: Start the Development Server

To create the YearTable and AverageTable components in this project, start by structuring the components to process data from the Manufac_India_Agro_Dataset.json file. The dataset contains information about crop production, yield, and cultivation areas for various crops from 1950 to 2020. Using TypeScript, the project ensures strong type safety, making it easier to handle data structures and catch errors during development. Each component is styled and built using the Mantine v7 library, leveraging its prebuilt table components and responsive utilities for a professional and user-friendly design.

In the YearTable component, the data is aggregated year by year to identify the crops with the maximum and minimum production for each year. This involves reading the dataset, parsing the data into a TypeScript interface, and applying sorting and filtering operations to compute the required information. The result is displayed in a Mantine Table component, ensuring a clean and responsive layout.

Similarly, the AverageTable component computes the average yield and cultivation area for each crop across the entire dataset (1950–2020). Missing values in the dataset are treated as 0 per the project specifications. TypeScript is used to define clear interfaces for the crop data, ensuring type correctness when calculating averages. The averages are rounded to three decimal places before being displayed.

The Mantine v7 template is used as the foundation of this project, which is integrated via the Vite build tool. It provides pre-configured support for TypeScript, React, and modern CSS features, enabling rapid development. Mantine's modular approach allows for quick customization of tables, buttons, and other UI elements, which simplifies the implementation of both components while maintaining a polished aesthetic. This combination of TypeScript and Mantine ensures the project is both efficient and robust, adhering to modern development standards.
