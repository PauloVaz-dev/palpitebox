const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('../../credentials.json') 

const doc = new GoogleSpreadsheet('1chI3zDcPveLSue09do1OhaMuTiK2LI7WsG5MQwTfVbQ')

export default async(req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A2:B2')
    const promocaoCell = sheet.getCell(1,0)
    const textoCell = sheet.getCell(1,1)

    res.end(JSON.stringify({
      showCoupon: promocaoCell.value === 'VERDADEIRO',
      message: textoCell.value
    }))
  } catch (error) {
    res.end(JSON.stringify({
      showCoupon: false,
      message: ""
    }))
  }
  
}