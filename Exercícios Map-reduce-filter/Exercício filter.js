const list=[20,3,234,12,17,543,23,42,275,1000]
const newList=list.filter(number=>{
    if(number%2 !==0) return false
    if(number%5 !==0) return false

    return true
})
console.log(newList)
const companies =[
    {name:'Samsung',marketvalue:50, fundeON:1947},
    {name:'Samsung',marketvalue:50, fundeON:1927},
    {name:'Samsung',marketvalue:50, fundeON:1987},
    {name:'Samsung',marketvalue:50, fundeON:1937},
    {name:'Samsung',marketvalue:50, fundeON:1967},

]

const newCompanies= companies.filter (company=>{
    if(company.fundeON<= 1930) return false
})
console.log(newCompanies)