// Function to validate user entry
function validateEntry(entry, min, max) {
    const num = parseInt(entry);

    if (isNaN(num) || num < min || num > max) {
        throw new Error(`Invalid entry. Please enter a number between ${min} and ${max}.`);
    }

    return num;
}

// Function to get the polygon name based on number of sides
function getShape(numSides) {
    switch(numSides) {
        case 3:
            return "Triangle";
        case 4:
            return "Quadrilateral";
        case 5:
            return "Pentagon";
        case 6:
            return "Hexagon";
        case 7:
            return "Heptagon";
        case 8:
            return "Octagon";
        case 9:
            return "Nonagon";
        case 10:
            return "Decagon";
        default:
            return "Polygon";
    }
}

// Prompt user for input
const entry = prompt("Please enter the number of sides:");


    // Validate user input
    const numSides = validateEntry(entry, 3, 10);

    const resultElem = document.getElementById("result");
    // Get the polygon name based on number of sides
    const polygonName = getShape(numSides);

    // Output the result
    console.log(`A ${polygonName} has ${numSides} sides.`);
    let one = document.getElementById("result");
    one.innerHTML = `A ${polygonName} has ${numSides} sides.`;
