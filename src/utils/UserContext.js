import { createContext } from "react";

const data = {
    name: 'Vamshi krishna',
    dob: '16-05-1996',
    role: 'Sr. Software Engineer'
}
export const UserContext = createContext(data);
