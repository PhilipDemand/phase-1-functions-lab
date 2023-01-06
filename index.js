function distanceFromHqInBlocks(pickupLoc) {
    let pickupDistance
    if (pickupLoc >= 42) {
      pickupDistance = (pickupLoc - 42);
    } else {
      pickupDistance = (42 - pickupLoc);
    }
    return pickupDistance
  }

  function distanceFromHqInFeet(pickupLoc) {
    let feetDistance = (distanceFromHqInBlocks(pickupLoc)) * 264
    return feetDistance;
  }

  function distanceTravelledInFeet(start, destination) {
    let feetTrav
    if (start > destination) {
      feetTrav = (start - destination) * 264
    } else {
      feetTrav = (destination - start) * 264
    }
   return feetTrav;
  }


  function calculatesFarePrice(start, destination) {
    let fare
    let feet = distanceTravelledInFeet(start, destination)
    if (feet <= 400) {
      fare = 0
    } else if (feet > 400 && feet <= 2000) {
      fare = (feet - 400) * .02
    } else if (feet > 2000 && feet < 2500) {
      fare = 25
    } else {
      fare = 'cannot travel that far'
    }
    return fare
  }