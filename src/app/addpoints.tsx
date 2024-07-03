import {
  BarcodeScanningResult,
  CameraView,
  useCameraPermissions
} from 'expo-camera'
import { Redirect, router } from 'expo-router'
import { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import { parseQRCode } from '../utils/parseQrCode'

export default function AddPoints() {
  const [permission, requestPermission] = useCameraPermissions()
  const [text, setText] = useState<string | undefined>()

  if (!permission) {
    return <View />
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          Precisamos de acesso a sua câmera. Clique no botão abaixo para
          permitir.
        </Text>
        <Button onPress={requestPermission} title="Permitir Câmera" />
      </View>
    )
  }

  if (parseQRCode(text)) {
    return router.replace('/')
  }

  return (
    <View style={styles.container}>
      <CameraView
        barcodeScannerSettings={{
          barcodeTypes: ['qr']
        }}
        style={styles.camera}
        onBarcodeScanned={(scanningResult: BarcodeScanningResult) => {
          setText(scanningResult.raw)
        }}
        //facing={facing}
      >
        <View style={styles.buttonContainer}></View>
      </CameraView>
      <View>
        <Text>{text}</Text>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  camera: {
    width: 300,
    height: 300
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  }
})
