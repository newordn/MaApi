const courses = async (parent,args,context,info)=>{
    const courses = await context.prisma.class({id:parent.id}).courses()
    return courses
}

const students = async (parent,args,context,info)=>{
    const students = await context.prisma.class({id:parent.id}).students()
    return students
}

module.exports={
   courses,
   students
}