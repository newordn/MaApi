const level = async (parent,args,context,info)=>{
    const level = await context.prisma.course({id:parent.id}).level()
    return level
}

module.exports={
    level
}