const Spinner = ({ stats }) => {
    return (
        Object.keys(stats).map(stat => {
            return(
                <>
                    <div className="flex flex-col gap-2 w-56">
                        <div className="rounded-full bg-slate-900  border-8 border-green-500 flex items-center justify-center">
                            <h2 className="text-white h-24 w-24 max-w-24 flex items-center justify-center">{stats[stat]}</h2>
                        </div>
                        <span className="h-24 text-green-500">{stat}</span>
                    </div>
                </>

            )
        })

    );

}

export default Spinner;