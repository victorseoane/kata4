function add(a) {
    function addAux(b){
        return (b) ? add(a+b) : (a)
    }
    addAux.value = a
    return addAux
}
  
module.exports = add