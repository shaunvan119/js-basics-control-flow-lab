
function scuberGreetingForFeet(someValue) {
if (someValue <= 400) {return "This one is on me!"}
 else if (someValue > 2000 && someValue < 2499) {return "I will gladly take your thirty bucks."}
 else if (someValue > 2500) {return "No can do."}
}


function ternaryCheckCity(city){
  const phrase = city === "NYC" ? "Ok, sounds good." : "No go."
  return phrase
}


function switchOnCharmFromTip(tip){
  let phrase
  switch (tip) {
    case 'generous': phrase = 'Thank you so much.';
    break;
    case 'not as generous': phrase = 'Thank you.';
    break;
    default: phrase = 'Bye.'
  }
  return phrase

}