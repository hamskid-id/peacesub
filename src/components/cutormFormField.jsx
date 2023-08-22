export const InputField=({
    inputIcon,
    placeHolder,
    name,
    type,
    errors,
    register,
    labelTitle,
    selectOption,
    selectArrayOption,
    defaultValue,
    labelStyle,
    style
})=>{
    switch(type){
        case "checkbox":
            return(
                <div className="flex items-center mb-3">
                    <input 
                        className={style}
                        type={type}
                        name={name}
                        placeholder={placeHolder}
                        {...register(
                            `${name}`
                        )
                    }
                    />
                    <label
                        className={labelStyle}
                        htmlFor={name}>
                        {labelTitle}
                    </label>
                </div>
            )
            break;

            case "select" :
            return(
                <div className="flex flex-col mb-3">
                    <label
                        className={labelStyle}
                        htmlFor={name}>
                        {labelTitle}
                    </label>
                    <select
                        className={style}
                        name={name}
                        defaultValue={defaultValue?defaultValue:null}
                        {...register(
                            `${name}`, 
                            {
                                required:`${labelTitle ? labelTitle : name} field is invalid`
                            }
                        )
                    }
                    >
                        { 
                            selectArrayOption && selectArrayOption.map((option,index)=>{
                                return(
                                    <option value={option} key={index}>{option}</option>
                                )
                            })
                        }
                        {
                            selectOption && <option value={selectOption}>{selectOption}</option>
                        }
                    </select>
                    {errors && (<p className="text-danger ">{errors.message}</p>)}
                </div>
            )
            break;
        case "password" :
            return(
                <div className="w-100 mb-2 relative">
                    <label
                        className={labelStyle}
                        htmlFor={name}>
                        {labelTitle}
                    </label>
                    <input 
                        className={style}
                        type={type}
                        name={name}
                        defaultValue={defaultValue?defaultValue:null}
                        placeholder={placeHolder}
                        {...register(
                            `${name}`, 
                            {
                                required:`${labelTitle ? labelTitle : name} field is invalid`,
                                minLength: {
                                    value: 8,
                                    message: "password must not be less than 8 characters"                   
                                }
                            }
                        )
                    }
                    />
                    {errors && (<p className="text-danger ">{errors.message}</p>)}
                    { 
                        inputIcon && (
                            <img 
                                src={inputIcon}
                                className="icon"
                                alt="object not found"
                            />
                        )
                    }
                </div>
            )
            break;
            case "textArea":
            return(
                <div className=" flex flex-col align-items-start w-100 mb-2 relative">
                    <label
                        className={labelStyle}
                        htmlFor={name}>
                        {labelTitle}
                    </label>
                    <textarea
                        className={style}
                        type={type}
                        name={name}
                        defaultValue={defaultValue?defaultValue:null}
                        placeholder={placeHolder}
                        {...register(
                            `${name}`, 
                            {
                                required:`${ labelTitle ? labelTitle : name } field is invalid`,
                            }
                        )
                    }
                    />
                    {errors && (<p className="text-danger ">{errors.message}</p>)}
                    { 
                        inputIcon && (
                            <img 
                                src={inputIcon}
                                className="icon"
                                alt="object not found"
                            />
                        )
                    }
                </div>
            )
            break;
            default :
                return(
                    <div className=" flex flex-col align-items-start w-100 mb-2 relative">
                        <label
                            className={labelStyle}
                            htmlFor={name}>
                            {labelTitle}
                        </label>
                        <input 
                            className={style}
                            type={type}
                            name={name}
                            defaultValue={defaultValue?defaultValue:null}
                            placeholder={placeHolder}
                            {...register(
                                `${name}`, 
                                {
                                    required:`${ labelTitle ? labelTitle : name } field is invalid`,
                                }
                            )
                        }
                        />
                        {errors && (<p className="text-danger ">{errors.message}</p>)}
                        { 
                            inputIcon && (
                                <img 
                                    src={inputIcon}
                                    className="icon"
                                    alt="object not found"
                                />
                            )
                        }
                    </div>
                )
    }
}