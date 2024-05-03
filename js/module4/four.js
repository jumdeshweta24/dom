const input = require("readline-sync");
let obj={}
// let obj = {
//     'A+': [{
//         op: '0',
//         donor: 'Alice',
//         bloodType: 'A+',
//         date: '12/03/24'
//     }]
// };

while (true) {
    console.log(obj);
    const userInput = input.question("Enter '0' to Add a Blood Donation, '1' to Remove a Blood Donation, '2' to Check Availability, 'exit' to quit: ");
    if (userInput === 'exit') {
        break;
    } else if (userInput === '0') {
        addDonation();
    } else if (userInput === '1') {
        removeDonation();
    } else if (userInput === '2') {
        checkAvailability();
    } else {
        console.log("Invalid input. Please enter a valid option.");
    }

    const continueInput = input.question("Do you want to continue? (yes/no): ");
    if (continueInput.toLowerCase() !== 'yes') {
        break;
    }
}

function addDonation() {
    const obj1 = {};
    obj1['op'] = '0';
    obj1['donor'] = input.question("Enter donor name: ");
    obj1['bloodType'] = input.question("Enter blood type: ");
    obj1['date'] = input.question("Enter date: ");
    if (!obj[obj1['bloodType']]) {
        obj[obj1['bloodType']] = [];
    }
    obj[obj1['bloodType']].push(obj1);
}

function removeDonation() {
    const bloodTypeToRemove = input.question("Enter the blood type to remove: ");
    const donorToRemove = input.question("Enter the donor name: ");
    if (obj[bloodTypeToRemove]) {
        obj[bloodTypeToRemove] = obj[bloodTypeToRemove].filter(donation => donation.donor !== donorToRemove);
        console.log("Removed donation for", donorToRemove);
    } else {
        console.log("No donations found for the specified blood type.");
    }
}

function checkAvailability() {
    const bloodType = input.question("Enter the blood type to check availability: ");
    if (obj[bloodType] && obj[bloodType].length > 0) {
        console.log("Available");
    } else {
        console.log("Not Available");
    }
}
