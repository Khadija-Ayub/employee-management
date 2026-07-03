function StatCard({icon , title , number})
{
 return(
    <div className="Stat-card">
        <div className="stat-icon">{icon}</div>
        <p className="stat-title">{title} </p>
        <h2 className="stat-num">{number} </h2>
    </div>
 );
}

export default StatCard