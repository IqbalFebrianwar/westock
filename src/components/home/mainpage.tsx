import React from "react";

type MainChildren = React.PropsWithChildren<{}>;

const MainPage =({ children } : MainChildren)=>{
    return(
        <main className="w-full font-body">
            {children}
        </main>
    )
}
export default MainPage