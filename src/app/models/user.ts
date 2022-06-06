export class User{
    _id!:string;
    name!: string;
    mail!: string;
    password!: string;
    phone!: number;
    Courses: any = [];
    avatar!: string;
    birthdate!: Date;
    country!: string;
}