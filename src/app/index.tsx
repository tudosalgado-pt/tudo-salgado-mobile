import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Header } from '../components/header'

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/addpoints">Ir para AddPoints</Link>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
