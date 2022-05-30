const list = [
    { name: "Rodolfo", vip: true },
    { name: "Rodolfo", vip: false },
    { name: "Rodolfo", vip: true },
    { name: "Rodolfo", vip: true },
    { name: "Rlfo", vip: false },
    { name: "olfo", vip: false },
    { name: "Rfo", vip: false },
    { name: "Rodo", vip: true },
]

const newList= list.map(client=>{
    const newList={
        name: client.name,
        vio:client.vp,
        sector:client.vip ? 'Black' : 'Green'
    }

    return newList
})

console.log (newList)



const students = [
    {name:"laisabel", testGrade:10},
    {name:"laisabel", testGrade:8},
    {name:"laisabel", testGrade:7},
    {name:"laisabel", testGrade:8},
    {name:"laisabel", testGrade:2},
    {name:"laisabel", testGrade:8},
    {name:"laisabel", testGrade:3},
    {name:"laisabel", testGrade:5},

];

const approvedStudents= students.map(student=>{
    let aprovedornot
    if (student.testGrade>=7){
        aprovedornot="aprovado"
    }else{
        aprovedornot= "reprovado"
    }
    const students={
        name:student.name,
        finalResult:aprovedornot
    }
    return students
})
console.log(approvedStudents)