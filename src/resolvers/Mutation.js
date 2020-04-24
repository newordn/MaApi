const {APP_SECRET} = require('../helpers/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {getUserId} = require('../helpers/user')
const signUp = async (parent,args,context,info)=>{
    console.log('signUp mutation')
    const password = await bcrypt.hash(args.password,10)
    const user = await context.prisma.createUser({...args,password,level:{connect:{id:args.level}}})
    const token = jwt.sign({userId:user.id},APP_SECRET)
    return {
        token,user
    }
}
const logIn = async (parent,args,context,info)=>{
    console.log('logIn mutation')
    const user =  await context.prisma.user({phone:args.phone})
    if(!user){
        throw new Error("L'utilisateur n'existe pas. Inscrivez-vous")
    }
    const valid = await bcrypt.compare(args.password,user.password)
    if(!valid){
        throw new Error('Mot de passe incorrect')
    }
   
    const token = jwt.sign({userId: user.id},APP_SECRET)
    return {
        token,
        user
    }
}
const classe = async (parent,args,context,info)=>{
    console.log('classe mutation')
    const illustration = await context.storeUpload(args.illustration)
    const classe = await context.prisma.createClass({...args,illustration:illustration.path})
    return classe
}

const course = async (parent,args,context,info)=>{
    console.log('course mutation')
    let pdfLink={path:""}
    let illustration={path:""}
    console.log(args.illustration)
    if(args.illustration!==null)
    illustration = await context.storeUpload(args.illustration)
    if(args.pdfLink!==null)
    pdfLink = await context.storeUpload(args.pdfLink)
    const course = await context.prisma.createCourse({...args,pdfLink:pdfLink.path,illustration:illustration.path,level:{connect:{id:args.level}}})
    return course
}

const subject = async (parent,args,context,info)=>{
    console.log('subject mutation')
    let td={path:""}
    let correction={path:""}
    let illustration={path:""}
    if(args.illustration!==null)
    illustration = await context.storeUpload(args.illustration)
    if(args.td!==null)
    td = await context.storeUpload(args.td)
    if(args.correction!==null)
    correction = await context.storeUpload(args.correction)
    
    const subject = await context.prisma.createSubject({...args,td:td.path,correction:correction.path,illustration:illustration.path,level:{connect:{id:args.level}}})
    return subject
}

module.exports={
    logIn,
    signUp,
    course,
    classe,
    subject
}