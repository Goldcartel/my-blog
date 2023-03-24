import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    const [logedIn, setLogedIn] = useState(false);

    const onClickLogIn =()=> setLogedIn(true);
    const onClickLogOut =()=> setLogedIn(false);

    return(
        <div>
            <Toolbar
                logedIn={logedIn}
                onClickLogIn={onClickLogIn}
                onClickLogOut={onClickLogOut}
            />
        </div>
    )
}

export default LandingPage;