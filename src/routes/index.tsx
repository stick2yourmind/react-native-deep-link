import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './app.routes';
import * as Linking from 'expo-linking';

const prefix = Linking.createURL('/'); 
const linking = {
  prefixes: [prefix],
  config: {
    screens:{
      home: {
        path: 'home'
      },
      product:{
        path: 'product/:id',
        // parse: {
        //   id: (id:string) => id
        // }
      }
    }
  }
}


const Routes = () => {
  return (
    <NavigationContainer linking={linking}>
      <AppRoutes/>
    </NavigationContainer>  
  )
}
export default Routes