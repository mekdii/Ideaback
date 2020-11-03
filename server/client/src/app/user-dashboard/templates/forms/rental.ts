export class Rental{
  id: String;
//land lord Information String;
lFirstName:String;
lLastName:String;
lemail:String;
lPhone:Number;
date:Date;

//tenat information
tFirstName:String;
tLastName:String;
temail:String;
tPhone:Number;
occupants:Number;

//Rental Information//

//House Rental Address
country:String;
state:String;
city:String;
postal:Number;
//Dates
startDate:Date;
endDate:Number;
payPeriod :String;

//financial
rentAmount:Number;
securityDeposit:Number;
lateCharge:Number;
paymentMethod:String;
collector:String;
terms:String;
lSignature:String;
tSignature:String;
}