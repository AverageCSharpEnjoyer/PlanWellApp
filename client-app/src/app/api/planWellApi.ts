import axios from "axios";
import { Meal } from "../models/meal";

export async function getMeals(){
    const response = await axios.get<Meal[]>('http://localhost:5000/api/meals');
    return response.data;
}