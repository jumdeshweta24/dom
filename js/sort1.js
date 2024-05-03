const cars=[{type:"volo",year:2016},
{type:"saab",year:2001},
{type:"BMW",year:2010}];
console.log(cars);
cars.sort(function(a,b){return
    a.year-b.year;
});