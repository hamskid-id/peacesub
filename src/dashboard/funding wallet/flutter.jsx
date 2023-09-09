import Swal from "sweetalert2";

export const FlutterSwal =(trxRef,amount,chargeAmount,status,payType,Name,phone,email,cardType,message)=>{
    return(
        Swal.fire({
            text:message,
            allowOutsideClick: false,
            icon:'success',
            html:`<p>${message}</p>
                <div>
                    <hr class=" text-xs text-dark border mb-4"/>
                    <div
                        class="flex items-center justify-between mb-3"
                    >
                        <h6 class="text-xs text-dark mb-3">
                        Status
                        </h6>
                        <h6 class="text-xs text-dark mb-3">
                            ${status}
                        </h6>
                    </div>
                    <div
                        class="flex items-center justify-between mb-3"
                    >
                        <h6 class="text-xs text-dark mb-3">
                            Transaction Reference
                        </h6>
                        <h6 class="text-xs text-dark mb-3">
                            ${trxRef}
                        </h6>
                    </div>
                    <div
                        class="flex items-center justify-between mb-3"
                    >
                        <h6 class="text-xs text-dark mb-3">
                            Amount
                        </h6>
                        <h6 class="text-xs text-dark mb-3">
                            ${ amount}
                        </h6>
                    </div>
                    <div
                        class="flex items-center justify-between mb-3"
                    >
                        <h6 class="text-xs text-dark mb-3">
                            Charged Amount
                        </h6>
                        <h6 class="text-xs text-dark mb-3">
                            ${chargeAmount}
                        </h6>
                    </div>
                    <div
                        class="flex items-center justify-between mb-3"
                    >
                        <h6 class="text-xs text-dark mb-3">
                            Payment Type
                        </h6>
                        <h6 class="text-xs text-dark mb-3">
                            ${payType}
                        </h6>
                    </div>
                    <div
                        class="flex items-center justify-between mb-3"
                    >
                        <h6 class="text-xs text-dark mb-3">
                        Name
                        </h6>
                        <h6 class="text-xs text-dark mb-3">
                            ${Name}
                        </h6>
                    </div>
                    <div
                        class="flex items-center justify-between mb-3"
                    >
                        <h6 class="text-xs text-dark mb-3">
                            Phone
                        </h6>
                        <h6 class="text-xs text-dark mb-3">
                            ${phone}
                        </h6>
                    </div>
                    <div
                        class="flex items-center justify-between mb-3"
                    >
                        <h6 class="text-xs text-dark mb-3">
                            Email
                        </h6>
                        <h6 class="text-xs text-dark mb-3">
                            ${email}
                        </h6>
                    </div>
                    <div
                        class="flex items-center justify-between mb-3"
                    >
                        <h6 class="text-xs text-dark mb-3">
                            Card Type
                        </h6>
                        <h6 class="text-xs text-dark mb-3">
                            ${cardType}
                        </h6>
                    </div>
                </div>`,
            showCloseButton: true,
        }).then(function() {
            window.location.replace("/fundwallet")
        }) 
    )
}