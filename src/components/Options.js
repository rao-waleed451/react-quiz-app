function Options({question,dispatch,answer}) {
    console.log(answer,question)
    const hasAnswer=answer!==null
    return (
       
             <div className="options">
                {question.options.map((option,index)=> <button disabled={hasAnswer} onClick={()=>dispatch({type:"newAnswer",payload:index})} className={`btn btn-option ${hasAnswer?question.correctOption===index?"correct":"wrong":""} ${index===answer?"answer":""}`} key={option}>{option}</button>)}
            </div>
        
    )
}

export default Options
