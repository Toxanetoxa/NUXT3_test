import texts from '~/texts/global.json'

export const usePhone = () => {
  return texts.attributes.phoneNumber
}

export const usePhoneLink = () => {
  const phone = usePhone()
  return `https://api.whatsapp.com/send?phone=${phone
    .replaceAll('+', '')
    .replaceAll('-', '')
    .replaceAll(' ', '')}`
}
