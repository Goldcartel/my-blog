import React from "react";
import Book from "./Book";

function Library() {
    return(
        <div>
            <Book name="파이썬" numOfPage={300}/>
            <Book name="자바" numOfPage={400}/>
            <Book name="JSP" numOfPage={500}/>
        </div>
    )
}

export default Library;