try{
    console.log("Awal blok try")
    errorCode;
    console.log("Akhir blok try")
}catch(error){
    console.log("nama", error.name)
    console.log("pesan",error.message)
    console.log("stack",error.stack)
}finally{
    console.log("akan tetap dieksekusi")
}