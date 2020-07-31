const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('../../credentials.json') 
const moment = require('moment')

const doc = new GoogleSpreadsheet('1chI3zDcPveLSue09do1OhaMuTiK2LI7WsG5MQwTfVbQ')

const getCupom = () => {
  let cod =  Math.random().toString(16).substring(3).toUpperCase()
  return cod.substr(0,4) + "-" + cod.substr(4,4) + "-" + cod.substr(8,4)
}
export default async(req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()  
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A2:B2')

    const promocaoCell = sheetConfig.getCell(1,0)
    const textoCell = sheetConfig.getCell(1,1)

    let Promo = ''
    let Cupom = ''
    if (promocaoCell.value === 'VERDADEIRO'){
      Cupom = getCupom(),
      Promo = textoCell.value
    }  

    //Nome	Email	Whasapp	Cupom	Promo
    await sheet.addRow({
      Nome: data.nome,
      Email: data.email,
      Whatsapp: data.whatsapp,
      Cupom: getCupom(),
      Promo: Promo,
      Data: moment().format('DD/MM/YYYY, HH:mm:ss '),
      Nota: parseInt(data.nota)
    })

    res.end(JSON.stringify({
      showCoupon: Cupom !== '',
      Cupom,
      Promo
    }))
  } catch (error) {
    res.end(JSON.stringify({
      showCoupon: false,
      message: ''
    }))
  }
  
}

