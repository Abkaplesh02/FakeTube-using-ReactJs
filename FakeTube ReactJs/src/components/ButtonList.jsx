import Button from "./Button";

const ButtonList=()=>{

    const ButtonList=["JavaScript","Recently uploaded", "Watched","JavaScript","Recently uploaded", "Watched", "Kumar sanu","New to you","T-series", "Harkirat Sings", "Akshay saini"]
    return (
        <div className="flex flex-wrap w-[100vw-370px]  py-2 overflow-y-scroll" >

            {
                ButtonList.map((e,index)=><Button key={index} name={e}></Button>)
            }
        
        
        

        </div>
    )
}

export default ButtonList;