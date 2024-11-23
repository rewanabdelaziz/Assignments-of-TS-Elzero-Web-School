// Write Function Code Here
function showTypes<T=void,S=void,G=void>(valOne?: T, valTwo?: S, valThree?: G):string{
    return `${valOne || 'Nothing'} - ${valTwo || 'Nothing'} - ${valThree || 'Nothing'}`
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true