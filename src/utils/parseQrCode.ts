import { IQrcode } from './types/qrCode'

export const parseQRCode = (qrcode: string | undefined) => {
  if (!qrcode) {
    return
  }

  const qrCodeData = {}
  const qrCodeLines = qrcode.split('*')
  if (!qrcode.includes('*')) {
    return null
  }

  for (const line of qrCodeLines) {
    const [key, value] = line.split(':')
    qrCodeData[key] = value
  }

  return qrCodeData as IQrcode
}
