export class Current {
	fromPageFlag:any;
	toOtpPageFlag:any;
    firstName:any;
    lastName:any;
    mobileNumber:any;
    newMobileNumber:any
    state:any
    district:any;
    block:any;
    incorrectMobileDetailCount=0;
    otp:any;
    articleDetails:any;
    firstName_eng:string;
    lastName_eng:string;
    comments:any
    sectionDetails:any;
    loginOrUpdateFlag:any;
    userData:any;
    previousMobileNumber:any;
    suggestedString:any
    currentLanguage:any
    constructor(public leadsFilter?: string) {
    }
}