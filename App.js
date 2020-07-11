import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreeen from './src/screens/ResultsShowScreen';



const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreeen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title: 'Business Search'
  }
});

const AppContainer = createAppContainer(navigator);

export default AppContainer;
