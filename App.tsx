/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const TestItem = ({i = 1}) => {
  return (
    <BottomSheetTextInput
      style={{color: 'white', backgroundColor: 'grey'}}
      placeholder={`${i}`}
    />
  );
};

const TestContent = () => {
  const snapPoints = React.useMemo(() => ['100%'], []);

  const sheetRef = React.useRef(null);
  const renderItem = ({item = 1}) => {
    return <TestItem i={item} />;
  };

  const data = React.useMemo(
    () => [
      1, 2, 4, 12345246576, 1253463, 43, 364, 5, 7568, 768, 4356, 42, 52, 5423,
      45746, 58, 796, 4534, 52, 52634, 576, 4587, 96, 6453, 642, 5, 48, 65, 53,
      76, 57, 86, 4, 86, 457, 37, 346, 85, 8, 67, 5763, 44, 63, 74856, 76, 975,
      68, 465, 753, 468, 6597, 5, 647, 354, 367, 4,
    ],
    [],
  );

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      keyboardBlurBehavior="restore"
      enablePanDownToClose
      animateOnMount>
      <BottomSheetFlatList
        keyExtractor={i => (Math.random() * i).toString()}
        renderItem={renderItem}
        data={data}
      />
    </BottomSheet>
  );
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Animated.View style={{flex: 1}}>
          <TestContent />
        </Animated.View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

export default App;
