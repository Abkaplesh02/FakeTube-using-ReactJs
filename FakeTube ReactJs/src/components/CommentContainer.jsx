import mockComments from "../utils/mockComments";
import CommentList from "./CommentList";


const CommentContainer = ()=>{
    return (
        <div>
        <h1 className="mt-20 text-xl font-bold">Comments💬:</h1>
        <CommentList data={mockComments}/>
        </div>
    )
}

export default CommentContainer;