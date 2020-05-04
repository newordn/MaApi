const level = async (parent,args,context,info)=>{
    const level = await context.prisma.user({id:parent.id}).level()
    return level
}
const comments = async (parent,args,context,info)=>{
    const comments = await context.prisma.user({id:parent.id}).comments({orderBy:'id_DESC'})
    return comments
    }
module.exports={
    level,
    comments
}