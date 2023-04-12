// we dont use ts, so
// type - input type 
// value - input control value from state 
// name - input name cause we must fing it in handleChange func 
// width & height - input size 
// options - list of option values if we r using select 
// handleChange - func to set state in parent component

const InputNba = ({ type, value, name, width, height, options, handleChange }) => {
    if (type === 'select') {
        return (
            <>
                <select
                    className='border-solid border-2 ml-[20px] text-[28px] px-[14px]'
                    type={type}
                    value={value}
                    name={name}
                    style={{ width: width + 'px', height: height + 'px' }}
                    onChange={(e) => handleChange(e)}>
                    {options?.map(el => (
                        <option key={el.teamId}>{el.teamName}</option>
                    ))}
                </select>
            </>
        )
    }
    return (
        <>
            <input
                className='border-solid border-2 ml-[20px] text-[28px] px-[14px]'
                type={type}
                value={value}
                name={name}
                style={{ width: width + 'px', height: height + 'px' }}
                onChange={(e) => handleChange(e)} />
        </>
    )
}

export default InputNba