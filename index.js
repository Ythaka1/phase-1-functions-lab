const hqBlock = 42;
const blockLengthInFeet = 264;

// Calculate distance in blocks
function distanceFromHqInBlocks(someBlock) {
  return Math.abs(someBlock - hqBlock);
}

// Calculate distance in feet from HQ
function distanceFromHqInFeet(someBlock) {
  let blocks = distanceFromHqInBlocks(someBlock);
  return blocks * blockLengthInFeet;
}

// Calculate distance traveled in feet between two blocks
function distanceTravelledInFeet(start, destination) {
  let blocksTravelled = Math.abs(destination - start);
  return blocksTravelled * blockLengthInFeet;
}

// Calculate fare based on the distance traveled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    return 0; // Free for distances <= 400 feet
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot for distances > 400 and <= 2000
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat rate for distances between 2000 and 2500 feet
  } else {
    return 'cannot travel that far'; // Do not allow distances > 2500 feet
  }
}