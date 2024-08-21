import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const navigator = createStackNavigator({
}, {
  initialRouteName: "",
  defaultNavigationOptions: {
    title: "Kionnali"
  }         
});

export default createAppContainer(navigator);