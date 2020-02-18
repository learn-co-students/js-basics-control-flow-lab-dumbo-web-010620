function scuberGreetingForFeet(feet){
  let xx
  if (feet < 400) {
    xx = 'This one is on me!'
  }
  else if (feet > 2000 && feet < 2500) { 
    xx = 'I will gladly take your thirty bucks.'
  }
  else { 
    xx = 'No can do.'
  }
  return xx
}

function ternaryCheckCity(city){
  let xx
  if (city === 'NYC') {
    xx = 'Ok, sounds good.'
  }
  else {
    xx = 'No go.'
  }
  return xx
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}