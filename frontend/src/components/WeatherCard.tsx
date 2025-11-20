function WeatherCard() {
    return (
        <div className="flex items-center w-2xl min-h-[220px] backdrop-opacity-40 rounded-xl mx-auto bg-neutral-50 dark:bg-neutral-950 items-center">
            <div className="flex justify-center-safe m-auto bg-red-50 w-xl min-h-[100px]">
                <div className="flex items=center w-20 my-4 mx-2  bg-red-400">
                    <p className="m-auto">월</p>
                </div>
                <div className="flex items=center w-20 my-4 mx-2  bg-red-400">
                    <p className="m-auto">화</p>
                </div>
                <div className="flex items=center w-20 my-4 mx-2  bg-red-400">
                    <p className="m-auto">수</p>
                </div>
                <div className="flex items=center w-20 my-4 mx-2  bg-red-400">
                    <p className="m-auto">목</p>
                </div>
                <div className="flex items=center w-20 my-4 mx-2  bg-red-400">
                    <p className="m-auto">금</p>
                </div>
                <div className="flex items=center w-20 my-4 mx-2  bg-red-400">
                    <p className="m-auto">토</p>
                </div>
                <div className="flex items=center w-20 my-4 mx-2  bg-red-400">
                    <p className="m-auto">일</p>
                </div>


            </div>
        </div>
    )
}

export default WeatherCard;