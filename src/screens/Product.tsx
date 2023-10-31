import { View,Text } from 'react-native'

const Product = ({route}) => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 32}}>
        Product id: {route.params?.id || 'NO ID'}
      </Text>
    </View>
  )
}
export default Product