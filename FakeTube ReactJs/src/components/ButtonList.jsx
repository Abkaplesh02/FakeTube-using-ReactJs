import Button from "./Button";

const ButtonList=()=>{

    const ButtonList=["All", "Music", "Kumar Sanu","Mixes"  , "Gaming","Songs","Live","Soccer","Cricket", "Dance troupes" , "T-series", "JavaScript","Movie musicals"]
    return (
        <div className="flex">

            {
                ButtonList.map((e)=><Button key={e} name={e}></Button>)
            }
        
        
        

        </div>
    )
}

export default ButtonList;