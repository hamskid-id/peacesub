import { Text } from "../elements/text"

export const Error=()=>{
    return(
        <div className="flex flex-cols items-center justify-center m-auto">
            <div>
                <Text
                    style="text-danger text-4xl font-extrabold text-center mb-2"
                    value="404"
                />
                <Text
                    style="text-danger text-sm font-semibold text-center "
                    value="Page Not Found"
                />
            </div>
        </div>
    )
}