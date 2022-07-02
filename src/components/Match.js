const Match = ({match}) => {
    console.log(match)
    return(
        <div className="w-52 h-20 p-4 bg-white border-2 border-green-500 rounded flex flex-col justify-center items-center overflow-hidden">
            <h5 className="text-green-500 font-bold">{match.name}</h5>
            <span className=" font-thin">{match.competition_name}</span>
        </div>
    )
}

export default Match;