const info = ()=> `Welcome on Ma Api`
const classes = async (parent,args,context,info)=>
{
    console.log('classes query')
    const classes = await context.prisma.classes({orderBy:'id_DESC'})
    return classes
}
const courses = async (parent,args,context,info)=>
{
    console.log('courses query')
    const courses = await context.prisma.courses({orderBy:'id_DESC'})
    return courses
}
const coursesByClass = async (parent,args,context,info)=>
{
    console.log('courses by class query')
    const courses = await context.prisma.class({id:args.classId}).courses({orderBy:'id_DESC'})
    return courses
}
const subjectsByClass = async (parent,args,context,info)=>
{
    console.log('subjects by class query')
    const subjects = await context.prisma.class({id:args.classId}).subjects({orderBy:'id_DESC'})
    return subjects
}
const commentsByCourse = async (parent,args,context,info)=>
{
    console.log('comments by course query')
    const comments = await context.prisma.course({id:args.courseId}).comments({orderBy:'id_DESC'})
    return comments
}

module.exports={
    info,
    classes,
    courses,
    coursesByClass,
    subjectsByClass,
    commentsByCourse
}