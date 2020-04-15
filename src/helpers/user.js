const APP_SECRET = "HistoryApi237"
const jwt = require('jsonwebtoken')

function getUserId(context){
    const Authorization = context.request.get('Authorization')
    if(Authorization){
        const token = Authorization.replace('Bearer ','')
        const {userId} = jwt.verify(token,APP_SECRET)
        return userId
    }
    throw new Error('Veuillez vous authentifiez')
}
module.exports={
    getUserId,
    APP_SECRET,
}