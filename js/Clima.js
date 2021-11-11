function fget(){
  let request = new XMLHttpRequest()
  request.OPEN("GET", url, false)
  request.send()
  return request.responseText
}

function cria(usuario){

}

function main(){
  usuarios = fget()
}