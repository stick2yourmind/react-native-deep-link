import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './app.routes';


const linking = {
  prefixes: ["exp://10.196.230.216:8081/--/myapp"],
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