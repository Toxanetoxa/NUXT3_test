import fs from 'fs'
import axios from 'axios'
const getTexts = async () => {
  const headers = {
    Authorization: `Bearer d4692973216b231bb837a2a4cdb064f4bbf5a5fcbd6b28e0a873c3d223d1adfb8461eaecc1d03767160ffe0ac91967e7c0e3536301c54b0d61d49eb9d6c24875964f0bc0abdd7e4b9f82fd852846c5096eb68905badbf882682777986f217ec031a3fed212bffcfad0c4aae1241ce9ce6a0b57c9a38bfa992ab7be4cf2912418`,
  }

  const { data } = await axios.get(
    `http://188.166.46.9:1337/api/tours?populate=deep`,
    { headers }
  )

  const { data: globalComponent } = await axios.get(
    `http://188.166.46.9:1337/api/global-component?populate=deep`,
    { headers }
  )

  const { data: home } = await axios.get(
    `http://188.166.46.9:1337/api/home?populate=deep`,
    { headers }
  )

  fs.writeFileSync(
    './src/texts/tours.json',
    JSON.stringify(data.data, null, 2)
  )

  fs.writeFileSync(
    './src/texts/global.json',
    JSON.stringify(globalComponent.data, null, 2)
  )

  fs.writeFileSync(
    './src/texts/home.json',
    JSON.stringify(home.data.attributes, null, 2)
  )
}

getTexts()
