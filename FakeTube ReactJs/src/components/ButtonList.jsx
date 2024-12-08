import Button from "./Button";

const ButtonList=()=>{

    const ButtonList=["JavaScript","Recently uploaded", "Watched","JavaScript","Recently uploaded", "Watched", "Kumar sanu","New to you","T-series", "Harkirat Sings", "Akshay saini"]
    return (
        <div className="flex w-[80%]  py-2 s ">

            {
                ButtonList.map((e,index)=><Button key={index} name={e}></Button>)
            }
        
        
        

        </div>
    )
}

export default ButtonList;