import { AntDesign } from '@expo/vector-icons'
import { Link, router } from 'expo-router'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

export function Header({ backButton = false }) {
  function goBack() {
    return router.back()
  }
  return (
    <View style={styles.header}>
      <View style={styles.back}>
        {backButton && (
          <TouchableOpacity onPress={() => goBack()}>
            <AntDesign name="arrowleft" size={25} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <Image
        source={require('./Logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.void} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  logo: {
    width: 20
  },
  void: {
    width: 30,
    height: 20
  },
  back: {
    width: 25
  }
})
