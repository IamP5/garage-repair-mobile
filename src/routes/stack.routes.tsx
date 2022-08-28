import { createStackNavigator } from '@react-navigation/stack';
import { CarMaintenances } from '../screens/CarMaintenances';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return(
    <Navigator initialRouteName="Home">
      <Screen 
        name="Home"
        component={Home}
      />

      <Screen 
        name="CarMaintenances"
        component={CarMaintenances}
      />
    </Navigator>
  )
}