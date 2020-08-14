const PI = 3.1415;
const INCHES_TO_FEET = 0.083333;
const exportObject = {
    PI,
    INCHES_TO_FEET,
    sum(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    }
};
// console.log(exportObject);

const data = [1, 2, 3];
let [a, , b, c = 4] = data;
// console.log('must be 1: ', a, 'must be 3', b, 'must be 4', c);

const data_obj = {
    arr: [1, 2, 3]
};
const { arr: [, v2] } = data_obj;
// console.log(v2);

const courseCatalogMetadata = [{
        title: 'Linear Algebra II',
        description: 'Advanced linear algebra.',
        texts: [{
            author: 'James Smith',
            price: 120,
            ISBN: '912-6-44-578441-0'
        }]
    },
    {
        title: 'Linear Math II',
        description: 'Advanced math algebra.',
        texts: [{
            author: 'Albert',
            price: 190,
            ISBN: '123-6-44-578441-0'
        }]
    }
];
const [course] = courseCatalogMetadata;
const [{ texts: textbooks }] = courseCatalogMetadata;
const [{ texts: [textbook] }] = courseCatalogMetadata;
const [{ texts: [{ ISBN }] }] = courseCatalogMetadata;

console.log(course);
console.log(textbooks);
console.log(textbook);
console.log(ISBN);