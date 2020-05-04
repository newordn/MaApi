const moment = require('moment')
const author = async (parent,args,context,info)=>{
    const author = await context.prisma.comment({id:parent.id}).author()
    return author
}

const onCourse= async (parent,args,context,info)=>{
    const course = await context.prisma.comment({id:parent.id}).onCourse()
    return course
}
const createdAt = async (parent,args,context,info)=>{
    const createdAt = await context.prisma.comment({id:parent.id}).createdAt()
    return moment(createdAt).fromNow()
}
module.exports={
    author,
    onCourse,
    createdAt
}