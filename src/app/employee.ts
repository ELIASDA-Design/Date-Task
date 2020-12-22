export class Employee {
    id: number = 0;
    firstName: string = "";
    lastName: string = "";
    birthDate: Date = new Date();
    
    // constructor() {
    //     // this.id = 0;
    //     // this.firstName = "";
    //     // this.lastName = "";
    //     // this.birthDate = new Date("02, December 2002");
    // }
}

export const Employees_Array: Employee[] = [
    {id: 1245,firstName: "Ahmed",lastName: "Khaled",birthDate: new Date("05, March 1996")},
    {id: 3506,firstName: "Soso",lastName: "Fofo",birthDate: new Date("03, April 1998")},
    {id: 2056,firstName: "Tamer",lastName: "Hosny",birthDate: new Date("15, June 2004")},
    {id: 7894,firstName: "Amro",lastName: "Diab",birthDate: new Date("26, Feb 2001")},
    {id: 8745,firstName: "Nawal",lastName: "Assaf",birthDate: new Date("06, Aug 1948")},
    {id: 1456,firstName: "Dodo",lastName: "Fodo",birthDate: new Date("16, Sep 2105")}
]
