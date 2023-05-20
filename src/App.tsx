/**
 * @prettier
 */

import React from 'react';
import {SafeAreaView} from "react-native"
import { Provider } from 'react-redux';
import AppNavigator from './routes';
import { reduxStore } from './reducers';

function App() {

  return (
    <SafeAreaView style={{flex:1}}>
      
      <Provider store={reduxStore}>
            <AppNavigator />
      </Provider>
    </SafeAreaView>
  );
}


// export as default.
export default App;
