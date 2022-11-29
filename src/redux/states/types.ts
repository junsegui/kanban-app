import { string } from "yup"

export interface modal {
    visible:boolean,
}
export interface taskStates{
    boards:{
        colums:{
            name:string,
            id:string,
            task:Task[]
        }[]
    }[]
}
export interface Task{
        id:string,
        description:string,
        status:string,
        task:string

}        
