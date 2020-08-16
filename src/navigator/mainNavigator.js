import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2190851Navigator from '../features/BlankScreen2190851/navigator';
import SignUp12090849Navigator from '../features/SignUp12090849/navigator';
import SignUp12190848Navigator from '../features/SignUp12190848/navigator';
import ArticleList90831Navigator from '../features/ArticleList90831/navigator';
import ArticleList90830Navigator from '../features/ArticleList90830/navigator';
import ArticleList90829Navigator from '../features/ArticleList90829/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2190851: { screen: BlankScreen2190851Navigator },
SignUp12090849: { screen: SignUp12090849Navigator },
SignUp12190848: { screen: SignUp12190848Navigator },
ArticleList90831: { screen: ArticleList90831Navigator },
ArticleList90830: { screen: ArticleList90830Navigator },
ArticleList90829: { screen: ArticleList90829Navigator },

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
