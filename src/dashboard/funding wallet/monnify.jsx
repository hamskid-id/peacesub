import { Toast } from "../../store/apiBaseUrl";
import Swal from "sweetalert2";

export const payWithMonnify=(key,email,amount,desc,name,age)=> {
    var fields = key.split('|');
    var newKey = fields[0];
    var newCode = fields[1];
    MonnifySDK.initialize({
        amount: amount,
        currency: "NGN",
        reference: new String((new Date()).getTime()),
        customerFullName:name,
        customerEmail: email,
        apiKey: newKey,
        contractCode: newCode,
        paymentDescription: desc,
        metadata: {
            "name": name,
            "age": age
        },
        // incomeSplitConfig: [{
        //     "subAccountCode": "MFY_SUB_342113621921",
        //     "feePercentage": 50,
        //     "splitAmount": 1900,
        //     "feeBearer": true
        // }, {
        //     "subAccountCode": "MFY_SUB_342113621922",
        //     "feePercentage": 50,
        //     "splitAmount": 2100,
        //     "feeBearer": true
        // }],
        onLoadStart: () => {
            console.log("loading has started");
        },
        onLoadComplete: () => {
            console.log("SDK is UP");
        },
        onComplete: function(response) {
            const{
                authorizedAmount,
                message,
                paidOn,
                paymentReference,
                redirectUrl,
                status,
                transactionReference
            }=response
            //Implement what happens when the transaction is completed.
            console.log(response);
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
                                ${transactionReference}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class="text-xs text-dark mb-3">
                                Authorized Amount
                            </h6>
                            <h6 class="text-xs text-dark mb-3">
                                ${authorizedAmount}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class="text-xs text-dark mb-3">
                                Paid On
                            </h6>
                            <h6 class="text-xs text-dark mb-3">
                                ${paidOn}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class="text-xs text-dark mb-3">
                                Payment Reference
                            </h6>
                            <h6 class="text-xs text-dark mb-3">
                                ${paymentReference}
                            </h6>
                        </div>
                    </div>`,
                showCloseButton: true,
            }).then(function() {
                window.location.replace("/fundwallet")
            })
        },
        onClose: function(data) {
            //Implement what should happen when the modal is closed here
            console.log(data);
            const{
                authorizedAmount,
                paymentStatus,
                redirectUrl,
                responseCode,
                responseMessage
            }=data;
            Swal.fire({
                text:responseMessage,
                allowOutsideClick: false,
                icon:'info',
                html:`<p>${responseMessage}</p>
                    <div>
                        <hr class=" text-xs text-dark border mb-4"/>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class="text-xs text-dark mb-3">
                           Payment Status
                            </h6>
                            <h6 class="text-xs text-dark mb-3">
                                ${paymentStatus}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class="text-xs text-dark mb-3">
                                Authorized amount
                            </h6>
                            <h6 class="text-xs text-dark mb-3">
                                ${authorizedAmount}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class="text-xs text-dark mb-3">
                                Response Code
                            </h6>
                            <h6 class="text-xs text-dark mb-3">
                                ${ responseCode}
                            </h6>
                        </div>
                    </div>`,
                showCloseButton: true,
            }).then(function() {
                window.location.replace("/fundwallet")
            })
        }
    });
}