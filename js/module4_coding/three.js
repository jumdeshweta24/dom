const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to process each query
function processQuery(query) {
    // Split the query into parts
    const parts = query.split(' ');

    // Determine the type of query
    const queryType = parseInt(parts[0]);

    // Process each type of query
    switch (queryType) {
        case 1:
            const orderNumber = parseInt(parts[1]);
            const name = parts.slice(2).join(' ');
            // Process type 1 query (add order)
            // console.log(`Added order ${orderNumber} for ${name}`);
            addorder()
            break;
        case 2:
            const orderNumber2 = parseInt(parts[1]);
            // Process type 2 query (ask when order will be ready)
            console.log(`Querying about order ${orderNumber2}`);
            break;
        case 3:
            // Process type 3 query (show next ready order)
            console.log('Showing next ready order');
            break;
        default:
            console.log('Invalid query type');
    }
}

let numQueries = 0;
let queries = [];

rl.question('Enter the number of queries: ', (N) => {
    numQueries = parseInt(N);

    console.log('Enter queries:');
    
    // Read each query
    rl.on('line', (query) => {
        queries.push(query);
        if (queries.length === numQueries) {
            // Process all queries when all are received
            queries.forEach(processQuery);
            rl.close();
        }
    });
});

