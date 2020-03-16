import { getUserAgent } from "../utilities/utilities";

//This is calling code that references another file
if (/Mozilla/.test(getUserAgent())) {
    alert("your browser contains mozilla!");
}