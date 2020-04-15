const info = ()=> `Welcome on Ma Api`
const classes = async (parent,args,context,info)=>
{
    const classes = await context.prisma.classes({orderBy:'id_DESC'})
    return classes
}
const courses = async (parent,args,context,info)=>
{
    const courses = await context.prisma.courses({orderBy:'id_DESC'})
    return courses
}
const coursesByClass = async (parent,args,context,info)=>
{
    const courses = await context.prisma.class({id:args.classId}).courses({orderBy:'id_DESC'})
    return courses
}

module.exports={
    info,
    classes,
    courses,
    coursesByClass
}