import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class FacebookButton extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
            }}>
            Sign in with Facebook
          </Text>
        </LinearGradient>
      </View>
    );
  }
}

<TouchableOpacity onPress = {() => {})}>
  <LinearGradient start={[0, 0.5]}
                  end={[1, 0.5]}
                  colors={['#EFBB35', '#4AAE9B']}
                  style={{borderRadius: 5}}>
    <View style={styles.circleGradient}>
      <Text style={styles.visit}>Login</Text>
    </View>
  </LinearGradient>
</TouchableOpacity>