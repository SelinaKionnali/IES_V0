import { createDrawerNavigator } from '@react-navigation/drawer'
import FoodSystemsScreen from '../screens/SystemsScreens/FoodSystemsScreen';
import WaterSystemsScreen from '../screens/SystemsScreens/WaterSystemsScreen';
import PowerSystemsScreen from '../screens/SystemsScreens/PowerScreen';
import HeatSystemsScreen from '../screens/SystemsScreens/ThermalScreen';
import CompostSystemsScreen from '../screens/SystemsScreens/CompostSystemsScreen';
import GreywaterSystemsScreen from '../screens/SystemsScreens/GreywaterSystemsScreen';
import DashboardScreen from '../screens/DashboardScreen';

const SystemsDrawer = createDrawerNavigator();

function SystemsStackNavigator() {
  return (
    <SystemsDrawer.Navigator>
      <SystemsDrawer.Screen name="Main App" component={DashboardScreen} />
      <SystemsDrawer.Screen name="FoodSystems" component={FoodSystemsScreen} />
      <SystemsDrawer.Screen name="WaterSystems" component={WaterSystemsScreen} />
      <SystemsDrawer.Screen name="PowerSystems" component={PowerSystemsScreen} />
      <SystemsDrawer.Screen name="HeatSystems" component={HeatSystemsScreen} />
      <SystemsDrawer.Screen name="CompostSystems" component={CompostSystemsScreen} />
      <SystemsDrawer.Screen name="GreywaterSystems" component={GreywaterSystemsScreen} />
    </SystemsDrawer.Navigator>
  );
}

export default SystemsStackNavigator;