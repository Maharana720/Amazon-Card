export default function Price({oldPrices,newPrices}){
    let Oldstyles={textDecorationLine:"line-through"};
    let newStles={fontWeight:"bold"};
    let styles={
        backgroundColor:"#e0c367",
        height:"30px",
        width:"200px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px"
    }
    return(
        <div style={styles}>
            <span style={Oldstyles}>{oldPrices}</span>
            &nbsp;&nbsp;&nbsp;
            <span>{newPrices}</span>
        </div>
    );
}