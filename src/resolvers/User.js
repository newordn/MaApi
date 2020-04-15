const level = async (parent,args,context,info)=>{
    const level = await context.prisma.user({id:parent.id}).level()
    return level
}

module.exports={
    level
}