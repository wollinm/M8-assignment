
//STEP 1
console.log('Step 1....')
let myMovies = [
    'Back to the Future',
    'Tootsie',
    'Singing in the Rain',
    'Gone with the Wind',
    'Star Wars'
]
console.log(myMovies[1]);

//STEP 2
console.log('Step 2....')
let movies = new Array(5);
console.log(movies.length)
movies[0]='Back to the Future'
movies[1]='Tootsie',
movies[2]='Singing in the Rain'
movies[3]='Gone with the Wind'
movies[4]='Star Wars'
console.log(movies[0]);
//STEP 3
console.log('Step 3....')
//let movies = ['Back to the Future','Tootsie','Singing in the Rain','Gone with the Wind','Star Wars']
console.log('array length before:'+ movies.length)
movies.splice(2,0,'New Movie')
console.log(movies)
console.log('array length after:'+movies.length)

//STEP 4
console.log('Step 4....')
movies = ['Back to the Future','Tootsie','Singing in the Rain','Gone with the Wind','Star Wars']
console.log(movies)
movies.shift()
console.log(movies)
console.log('array lenght: ' + movies.length)
//STEP 5
console.log('Step 5....')
movies = ['Back to the Future','Tootsie','Singing in the Rain','Gone with the Wind','Star Wars','Cinderella','Peter Pan']
console.log('array lenght: ' + movies.length)
for (movie in movies) {
   console.log('movie ' + movie + ": " + movies[movie])
}
//STEP 6
console.log('Step 6....')
movies = ['Back to the Future','Tootsie','Singing in the Rain','Gone with the Wind','Star Wars','Cinderella','Peter Pan']
console.log('array lenght: ' + movies.length)
for (movie of movies) {
   console.log('movie: ' + movie)
}
//STEP 7
console.log('Step 7....')
movies = ['Back to the Future','Tootsie','Singing in the Rain','Gone with the Wind','Star Wars','Cinderella','Peter Pan']
console.log('array lenght: ' + movies.length)
movies.sort()
for (movie of movies) {
   console.log('movie: ' + movie)
}
//STEP 8
console.log('Step 8....')
movies = ['Back to the Future','Tootsie','Singing in the Rain','Gone with the Wind','Star Wars','Cinderella','Peter Pan']
leastFavMovies = ['Ballistic','One missed call','Left behind']
//console.log('array lenght: ' + movies.length)
console.log('\nMovies I like:\n')
console.log('\n')
for (movie in movies) {
   console.log('movie ' + movie + ": " + movies[movie])
}
console.log('\nMovies I regret watching:\n')
console.log('\n')
for (movie in leastFavMovies) {
    console.log('movie ' + movie + ": " + leastFavMovies[movie])
 }
//STEP 9
console.log('Step 9....')
movies = ['Back to the Future','Tootsie','Singing in the Rain','Gone with the Wind','Star Wars','Cinderella','Peter Pan']
leastFavMovies = ['Ballistic','One missed call','Left behind']
movies = movies.concat(leastFavMovies)
console.log('concat:' + movies)
console.log('array lenght: ' + movies.length)
//STEP 10
console.log('Step 10....')
movies = ['Back to the Future','Tootsie','Singing in the Rain','Gone with the Wind','Star Wars','Cinderella','Peter Pan']
leastFavMovies = ['Ballistic','One missed call','Left behind']
movies = movies.concat(leastFavMovies)
console.log('last movie: ' + movies[movies.length-1])
//STEP 11
console.log('Step 11....')
movies = ['Back to the Future','Tootsie','Singing in the Rain','Gone with the Wind','Star Wars','Cinderella','Peter Pan']
leastFavMovies = ['Ballistic','One missed call','Left behind']
movies = movies.concat(leastFavMovies)
console.log('first movie: ' + movies[0])
//STEP 12
console.log('Step 12....')
movies = ['Back to the Future','Tootsie','Singing in the Rain','Gone with the Wind','Star Wars','Cinderella','Peter Pan']
leastFavMovies = ['Ballistic','One missed call','Left behind']
movies = movies.concat(leastFavMovies)
console.log(movies)
for (movie in leastFavMovies) {
    //console.log(movie +" : " +leastFavMovies[movie])
    toDelete = movies.lastIndexOf(leastFavMovies[movie])
    console.log('index to remove: ' + toDelete + ' movie: ' + leastFavMovies[movie])
    //delete movies[toDelete]
    movies.splice(toDelete,1)
}
console.log(movies)
//STEP 13
console.log('Step 13....')
movies = [['Back to the Future',1],
          ['Tootsie',2],
          ['Singing in the Rain',3],
          ['Gone with the Wind',4],
          ['Star Wars',5]]

number = 1
let type = typeof number
for (movie in movies) {
    let list = movies[movie]
    //console.log('list: ' + list)
    let movieRank = list.filter(item => typeof item === type)
    let movieName = list.filter(item => typeof item != type)
    //console.log('movieRank: ' + movieRank)
    console.log('Movie Name: ' + movieName)
}

//console.log(movies[0])
//STEP 14
console.log('Step 14....')
let employees = ['ZAK','JESSICA','MARK','FRED','SALLY']
console.log(employees)
console.log('Employees:\n')
console.log('')

function showEmployee(employees) {
    //loop through employees array
    employees.forEach((employee) => {
        console.log(`${employee}`)
    })
    console.log('')
}
showEmployee(employees)

//STEP 15
console.log('Step 15....')
let list = [58,'','abcd',true,null,false,0]
//console.log('list: ' + list)
function filterList(list) {
    let validChars = list.filter(item => item)
    list = validChars
    //console.log('validChars: ' + validChars)
    return list 
}
list = filterList(list)
console.log(list)

//STEP 16
console.log('Step 16....')
list=[67,94,13,34,54,65,22,44,55,66]
console.log('array with numbers: ' + list)
function getRandom(list) {
  let random = document.getElementById("id").innerHTML = Math.floor(Math.random()*10);
  console.log('random number: ' + random)
  return(list[random])
}
let numberReturned = getRandom(list)
console.log('Number returned: ' + numberReturned)
//STEP 17
console.log('Step 17....')
list=[67,94,13,34,54,65,22,44,55,66]
console.log('array with numbers: ' + list)
let y = 0
let x = 0
function getlargestNumber(list) {
    for (i in list) {
       x=parseInt(list[i])
       if (x > y) {
          y=x
       }
    }
  return(y)
}
let largestNumber = getlargestNumber(list)
console.log('Largest Number: ' + largestNumber)
//STEP 17