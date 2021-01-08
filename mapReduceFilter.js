// Bad
const total = 0
const withTax = []
const highValue = []
for(i=0; i< orders.length; i++){
    // Reduce
    total += orders[i]
    // Map
    withTax.push(orders[i] * 1.1)

    // Filter
    if (order[i] > 100 ){
        highValue.push(order[i])
    }
}

// Good
// Reduce
const total = orders.reduce((acc, cur) => acc + cur)

// Map
const withTax = orders.map(v => v * 1.1)

// Filter
const highValue = orders.filter(v => v > 100)