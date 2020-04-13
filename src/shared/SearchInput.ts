export class searchInput{
firstName: string;
lastName: string;
customerID: number;
deviceUsageID: number;
algorithmID: number;
scoreID: number;
logentryTimeFrom: Date;
logentryTimeTo: Date;
constructor(firstName,lastName,customerID,deviceUsageD,algorithmID,scoreID,logentryTimeFrom,logentryTimeTo)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.customerID = customerID;
    this.deviceUsageID = deviceUsageD;
    this.algorithmID = algorithmID;
    this.scoreID = scoreID;
    this.logentryTimeFrom = logentryTimeFrom;
    this.logentryTimeTo = logentryTimeTo;
}
}
