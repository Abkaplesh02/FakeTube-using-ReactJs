import Comment from "./Comment";

const CommentList= ({data})=>{


    return (
        <div>
            {data.map((comment,index)=>( 
                    <div  key={index} > 
                <Comment data={comment}/>
                <div className="ml-3 border-l-2 border-black">
                    <CommentList data={comment.replies}/>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default CommentList;