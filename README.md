  SERVIDOR


| VERB   	| URI PATH            	| DESCRIPTION                 	|
|--------	|---------------------	|-----------------------------	|
| GET    	| `/allRentals`       	| All Rentals   list          	|
| GET    	| `/RentalsByOwner`     | Rentals showcased according to owner(CREATOR id )	|
| POST   	| `/newRentalCreated`   | Create a new rental         	|
| POST   	| `/placeBookingOffer`  | Publishing a search bookig ad |
| GET    	| `/:rental_id`       	|  Matching ID Rental details 	|
| GET    	| `/SearchCity`       	|  Search Bar to look for rentals in a city	|
| GET    	| `/SearchBoat`       	|  Search Bar to look for rentals by particular boat type|
| PUT    	| `/edit/:rental_id`  	| Matching ID rental edit 	|
| PUT    	|'/joinRental/:rental_id' | button to let user participate to a boat trip|
| PUT    	|'/unjoinRental/:rental_id' | button to let user delete his partecipation to a boat trip|

| DELETE 	| `/delete/:rental_id` 	| Delete a Rental             	|
| POST   	| `/login`            	| Log in page                 	|
| POST   	| `/signup`           	| Sign up page                	|
| GET    	| `/verify`           	| Verify auth Token           	|
| GET    	| `/allUsers`     	    |  all Users list          	    |
| GET    	| `/profile`     	      |  logged user personal profile |
| PUT    	| `/editMyProfile`     	| log user edit personalprofile |
| POST   	| `/createUser`       	| create a  new user          	|
| GET    	| `/details/:user_id`   | Matching ID user detail     	|
| PUT    	| `/edit/:user_id`    	| Matching ID user edit  	      |
| DELETE 	| `/delete/:user_id`  	| Delete a  user              	|
| GET    	| `/findByCity`     	  | SEarch Bar in Users Gallery   |




CLIENTE


| URI PATH              	| DESCRIPTION                 	| PROTECTED 	|
|-----------------------	|-----------------------------	|-----------	|
| `/gallery`            	| All Rentals list            	|           	|
| `/newrental`           	| offer a  new rental        	  |           	|
| `/details/:rental_id` 	|  Matching ID Rental details 	|    X      	|
| `/login`              	| Log in page                 	|           	|
| `/signup`             	| Sign up page                	|           	|
| `/allUsers`           	| All users list              	|           	|
| `/details/:user_id`   	| Matching ID user detail     	|     X     	|
| `/placeabooking`       	|   publish a booking search ad |      X     	|
| `/profile`       	      |  logged user personal profile |      X     	|
|`/editmyprofile`       	|  edit personal profile        |      X     	|




# boatbooking
