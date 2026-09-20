const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
   console.log(` ${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js" ,"cpp", "rb","java", "py"]

for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of America")
map.set('FR' , "Franch")

for (const key in map) {
    console.log();
    
}
// when we want to access object in js we use for in loop