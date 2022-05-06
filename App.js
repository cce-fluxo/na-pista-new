import { StatusBar } from 'react-native';
import SignedOutRoutes from './src/Routes/signedOut.routes.js';
// import SignedInRoutes from './src/Routes/signedIn.routes.js';
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
      <SignedOutRoutes/>
    </>
  );
}
