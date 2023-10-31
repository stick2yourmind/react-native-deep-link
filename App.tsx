import { createURL, useURL } from 'expo-linking';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const redirectUrl = useURL()
  const url = createURL('product', {
    
  })
  console.log('🚀 ~ file: App.tsx:9 ~ App ~ url:', url)
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>redirectUrl: {redirectUrl}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import * as Linking from 'expo-linking';
// import { NavigationContainer } from '@react-navigation/native';


// const prefix = Linking.createURL('/');

// export default function App() {
//   let hostname = path = queryParams = null
//   const url = Linking.useURL();
//   const linking = {
//     prefixes: ['exp://10.196.230.216:8081/--/my-app'],
//     config: {
//     }
//   };
//   if(url){
//     const { hostname: currentHost, path: currentPath, queryParams: currentQ } = Linking.parse(url || "");
//     hostname = currentHost
//     path = currentPath
//     queryParams = currentQ
//   }
//   return (
//     <NavigationContainer linking={linking} >
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>hostname: {hostname || 'No hostname'}</Text>
//         <Text>path: {path || 'No path'}</Text>
//         <Text>queryParams: {queryParams || 'No queryParams'}</Text>
//         <StatusBar style="auto" />
//       </View>
//     </NavigationContainer>
//   );
// }

