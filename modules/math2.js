// Object Name Export

cosnt PI = 3.1415;
cosnt DEGREES_IN_CIRCULE = 360;

function convertDegToRad(degree) {
    return degree * PI / (DEGREES_IN_CIRCULE / 2);
}

export { PI, DEGREES_IN_CIRCULE, convertDegToRad }