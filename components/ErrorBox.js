export default function ({ error }) {

    if (!error) {
        return <></>
    }

    return (
        <div className="flex flex-col gap-4 bg-red-200 w-full">
            {
                Object.keys(error).map((key, index) => (
                    <p key={key + ' error ' + index}
                        className='text-white text-2xl text-center'>
                        {`${key}: ${error[key][0]}`}</p>
                ))
            }
        </div>
    )




}