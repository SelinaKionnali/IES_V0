import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const navigator = createStackNavigator({
  Dash: DashboardScreen,
}, {
  initialRouteName: "Dash",
  defaultNavigationOptions: {
    title: "Business Search"
  }         
});

export default createAppContainer(navigator);