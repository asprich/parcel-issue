import AlertUser from "./main/alert-user";
import Utilities from "./utilities/utilities";

//This is a terrible way to do javascript, however this 
//will allow us to migrate old crappy tightly coupled js
//to more loosly coupled, testable, modules. 
global.myNamespace = {
    AlertUser,
    Utilities
};

export default myNamespace;