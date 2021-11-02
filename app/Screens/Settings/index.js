import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';

const Settings = (props) => {
  const [Content_List, setContent_List] = useState();

  React.useEffect(() => {}, []);


  return (
    <SafeAreaView style={{backgroundColor: '#FFF', flex: 1}}>
      <Text>Settings</Text>
    </SafeAreaView>
  );
};

const Localstyles = {
  
};


export default Settings;
