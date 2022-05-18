export interface Task {
    id: number; // cuando creamos una task podría no venir el id con numero
    text:string;
    day: string;
    reminder: boolean;
}