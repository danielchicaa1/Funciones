let validarUsuario = (usuario, contraseñaUno,contraseñaDos)=>{
   
    if(contraseñaUno != contraseñaDos ){
        return(`${usuario} ambas contraseñas deben ser iguales`)
    }else if(contraseñaUno.length<7){
        return(`${usuario} la contraseña debe ser minimo de 8 caracteres`)
    }
    else{
        return(`Bienvenido a tu cuenta ${usuario}`)
    }
}

console.log(validarUsuario("vegeta", "danielchica","danielchica"));