let password = "kittenNoodles97"

if(password.search(/[a-z]/) !== -1 && password.search(/[0-9]/) >= 1 && password.length >= 10 && password.length < 20 && password.search(/[A-Z]/) !== -1 && password.startsWith("ramen")) {
    console.log("password saved successfully")
} else {
    console.log("password does not meet requirements. Must have at least one number,one letter, start with 'ramen', one capital letter, inbetween 10 and 20 characters long.")
}

///// Added max password length and the requirement that there be a capital letter and start with ramen

// password.length >= 10 
// && password.search(/[0-9]/) >= 1

// let password = "1amenNoodles97"
// console.log(password.search(/[a-z]/) !== -1)
