
import { ImageBackground, Text, View } from 'react-native';
import picture from './assets/image/background.png'
import { styles } from './assets/styles'
import { RegistrationScreen } from './screens/RegistrationScreen';
import { LoginScreen } from './screens/LoginScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={picture}>
        {/* <RegistrationScreen /> */}
        <LoginScreen/>
      </ImageBackground>
    </View>
  );
}


