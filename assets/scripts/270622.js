function checkSoupType(amount) {
  const money = Math.round(amount);

  if (money >= 5000) {
    console.log("Cooking white soup..");
  } else if (money >= 2000) {
    console.log("Cooking ofo soup..");
  } else if (money >= 1000) {
    console.log("Cooking indomie..");
  } else {
    console.log("Everybody will stay hungry..");
  }
}

checkSoupType(4999.5);
