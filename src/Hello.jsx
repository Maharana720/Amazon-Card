
function Hello({username,textColor}){
    // let styles={color:textColor};
    return(
        <>
            <h1 style={{color:textColor}}>Hello,{username}</h1>
        </>
    );
}
export default Hello;