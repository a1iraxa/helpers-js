const fn1 = () => {
    console.log('Scrop 1');
    let scope = 5;
    console.log(scope); {
        console.log('Scrop 2');
        let scope = 'difference scope';
        console.log(scope);
    } {
        console.log('Scrop 3');
        let scope = 'a third scope';
        console.log(scope);
    }
}
fn1();

function getPersonES6(name, age, email) {
    return {
        name,
        getAge() { return age },
        email
    }
}
let age = getPersonES6('foo', 38, 'doobae@asd.co').getAge();

console.log(age);