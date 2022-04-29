import { StatusBar } from 'react-native';
import Routes from './src/Routes/index.js';
import AppLoading from 'expo-app-loading';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Ubuntu_500Medium,Ubuntu_400Regular } from '@expo-google-fonts/ubuntu';


export default function App() {
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    Ubuntu_500Medium,
    Ubuntu_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar translucent backgroundColor={'black'} />
      <Routes/>
    </>
  );
}
