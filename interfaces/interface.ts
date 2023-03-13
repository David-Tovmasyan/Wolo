// we have 2 types of user. First is just a user and second is company. 
// When registrating people gonna choose what type of account they want to have (normal or company)

//Both types are Iaccount
export interface Iaccount{
    id:number,
    login:string,
    password:string,
    username:string,
    email:string,
    profilePicture?:string,
    phone?:string
    accountType:boolean
}

// Users can follow companies 
export interface Iuser extends Iaccount{
    following:Array<Icompany>,
}

// Icompany is the same Iaccount + company parameters. Company parameters are posting, company's description and Location 
export default interface Icompany extends Iuser{
    posts:Array<Ipost>,
    description:string,
    geolocation:string,
    phone:string
}

export interface Ipost{
    postId:number,
    image:string,
    publishDate:Date,
    postDescription:string
}
