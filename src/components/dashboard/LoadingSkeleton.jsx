function LoadingSkeleton({employeesPerPage}){
  return(
    <div className="skeleton-container">
        {
            Array.from({length : employeesPerPage}).map((_,rowIndex)=>(
                <div key={rowIndex} className="skeleton-row" >
                    {Array.from({length: 8 }).map((_,cellIndex)=>(
                      <div key={cellIndex} className="skeleton-cell" ></div>
                    ))}
                </div>
            )
            )
        }
    </div>
  );
}

export default LoadingSkeleton;