export class ContactModel {
    constructor(
        public ContactId : number,
        public  FirstName: string, 
        public MiddleName: string, 
        public  Lastname : string,
        public  BirthDate: Date,
        public  EmailId: string,
        public  MobileNo: string, 
        public  WorkPhone: string,
        public HomePhone : string,
        public IsActive: boolean 
        )
        {
          this.ContactId = ContactId;
          this.FirstName=FirstName;
          this.MiddleName = MiddleName;
          this.Lastname =Lastname;
          this.BirthDate = BirthDate;  
          this.EmailId = EmailId;  
          this.MobileNo = MobileNo;  
          this.WorkPhone = WorkPhone;  
          this.HomePhone = HomePhone;  
          this.IsActive = IsActive; 
        }
}
