# IES_V0 - Energy Sensor Data Viewer

## Project Description

This project is a React Native application designed to display real-time data from sensors connected to the IES (Integrated Energy System). The application is intended for sideloading onto Apple devices and will visualise data from heat sensors, solar sensors, and possibly other environmental data sources.

The initial version (V0) of the project will focus on rendering basic graphs from dummy or preliminary data. Future versions may incorporate more complex features, such as live data updates, interactive data displays, and branding elements consistent with the existing systems pages.

## Installation and Setup

To run this project locally:

1. Clone the repository:
    ```bash
    git clone git@github.com:SelinaKionnali/IES_V0.git
    ```

2. Navigate to the project directory:
    ```bash
    cd IES_V0
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Run the application on an iOS simulator or device:
    ```bash
    npx react-native run-ios
    ```

This project is currently in the early stages, so additional setup instructions and dependencies may be added as development progresses.

## Preliminary Data and Features

### Data Sources
- Heat sensors (preliminary data as of 12/07/24)
- Solar sensors (ERD created, data integration planned for future versions)
- Dummy data for initial graph rendering

### Features (V0)
- Display preliminary or dummy data in a simple graph
- Basic user interface for data visualization
- No backend integration at this stage

## Project Planning

### User Stories
- As a user, I want to see real-time data from the heat sensors.
- As a user, I want to interact with the graph to see data changes when the heat sensor is manipulated (e.g. by holding or blowing on it).
- As a user, I want the app to match the branding of existing systems pages.

### Wireframes
Initial wireframes are in progress and will focus on the graph display and basic UI elements that align with the existing branding. Future versions may incorporate more detailed wireframes based on additional requirements.

### ERD (Entity Relationship Diagram)
The current ERD outlines the data structures for solar and heat sensors. This diagram will evolve as more data sources are integrated.

The following ERD represents the simplified data structure used in V0 of the IES Data Viewer application. This version focuses on visualizing basic thermal data from a single sensor type.

- **sensor**: Identifies the sensor collecting the data.
- **thermalData**: Captures the temperature data recorded by the sensor. For V0, this includes data such as `timestamp`, `coldTempIn`, `hotTempOut`, and `volumeLevel`.

### Simplified ERD for V0

```plaintext
sensor (sensorId, sensorType, locationId)
   |
   |-- thermalData (recordId, sensorId, timestamp, coldTempIn, hotTempOut, volumeLevel)

## Demo and Deployment

The app is currently not deployed. A future deployment plan may include instructions for sideloading the app onto Apple devices or releasing it via TestFlight for internal testing.

## Technologies Used

- React Native
- Node.js (for future backend integration)
- Expo (for development and testing)

## Future Enhancements

- Live data integration with the IES system
- Improved UI/UX with system branding- Expanded data visualization features (e.g., multiple graphs, data comparisons)
- User interaction features:
    -  Drag and drop functionality
    -  Graph data comparisons
