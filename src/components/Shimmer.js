const Shimmer = ()=>{
    return(
        <div className="restraunt-list">
          {Array(12).fill("").map((e,ind)=>{
           return <div key={ind} className="shimmer-card"></div>
})}
            
          


        </div>
    )
}

export default Shimmer ;