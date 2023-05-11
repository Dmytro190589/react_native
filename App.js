
import { ImageBackground, Text, View } from 'react-native';
import picture from './assets/image/background.png'
import { styles } from './assets/styles'
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={picture}>
        <Text>Hello! world</Text>
      </ImageBackground>
    </View>
  );
}


