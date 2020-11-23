import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2178026Navigator from '../features/BlankScreen2178026/navigator';
import BlankScreen1178025Navigator from '../features/BlankScreen1178025/navigator';
import BlankScreen0178024Navigator from '../features/BlankScreen0178024/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2178026: { screen: BlankScreen2178026Navigator },
BlankScreen1178025: { screen: BlankScreen1178025Navigator },
BlankScreen0178024: { screen: BlankScreen0178024Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
