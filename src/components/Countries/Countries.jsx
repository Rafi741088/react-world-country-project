import { use } from "react";

function Countries({countriesPromise}){
    const Countries= use(countriesPromise);
    console.log(Countries);
    return(
        <div>
        <p>our countris</p>
        </div>
    )
}
export default Countries;