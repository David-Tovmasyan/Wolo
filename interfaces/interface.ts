export interface Iuser{
    login:string,
    password:string,
    username:string,
    email:string,
}

export default interface Icompany extends Iuser{
    posts:Array<Ipost>,
    description:string,
    geolocation:string,
}

export interface Ipost{
    image:string
}