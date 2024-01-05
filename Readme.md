/BOOKING SERVICE IMPLEMENTATION FOR SKYWAY 
## TABLE
  
  ### ((BOOKING))  => userId,flightId,Status of booking(enum)->(noofSeats) from frontend,(totalCost) from backend
  -> as booking belongs to particular userid and flightid
  ->one user can have multiple bookings
  ->one flight can also have multiple bookings
  ->these are interacted with http calls(here through http call(axios), fetch the data req(data.fightId) from flight service)
/