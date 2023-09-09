import { Toast } from "../../store/apiBaseUrl";
import PaystackPop from '@paystack/inline-js';
import Swal from "sweetalert2";

export const PayWithPayStack=(key,email,amount)=>{
    const paystack = new PaystackPop();
    paystack.newTransaction({
        key: key,
        email: email,
        amount: amount*100,
        onSuccess: (response) => { 
            const{
                message,
                redirecturl,
                reference,
                status,
                trans,
                transaction,
                trxref
               }=response;
               closePaymentModal()// this will close the modal programmatically
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
                                    ${trxref}
                                </h6>
                            </div>
                            <div
                                class="flex items-center justify-between mb-3"
                            >
                                <h6 class="text-xs text-dark mb-3">
                                    Reference
                                </h6>
                                <h6 class="text-xs text-dark mb-3">
                                    ${ reference}
                                </h6>
                            </div>
                            <div
                                class="flex items-center justify-between mb-3"
                            >
                                <h6 class="text-xs text-dark mb-3">
                                    Transaction
                                </h6>
                                <h6 class="text-xs text-dark mb-3">
                                    ${transaction}
                                </h6>
                            </div>
                            <div
                                class="flex items-center justify-between mb-3"
                            >
                                <h6 class="text-xs text-dark mb-3">
                                    Trans
                                </h6>
                                <h6 class="text-xs text-dark mb-3">
                                    ${trans}
                                </h6>
                            </div>
                        </div>`,
                    showCloseButton: true,
                }).then(function() {
                    window.location.replace("/fundwallet")
                })
          },
          onCancel: () => {
            // user closed popup
            Toast.fire({
                icon: 'info',
                title:"Popup Closed"
            }).then(function() {
                window.location.replace("/fundwallet")
            })
          }
    });
}
