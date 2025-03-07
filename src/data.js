export const API_KEY='AIzaSyBVcrH_PwIi7g0SB06szhH1gKiP6f2FdgM';
export const valueconverte =(value)=>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";

    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"k";

    }
    else{
        return value;
    }

}
