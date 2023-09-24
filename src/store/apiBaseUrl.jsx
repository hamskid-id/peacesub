import Swal from "sweetalert2"

export const apiBaseUrl = "https://datahubsapi.prisca.5starcompany.com.ng/api"

export const setHeaders = ()=>{
    const user = JSON.parse(localStorage.getItem('DataHubUserToken'))
    const headers ={
        headers: {
            "Authorization":`Bearer Bearer ${user?.access_token}`
        }
    }
    return headers
}
export const ToastOption ={
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  }