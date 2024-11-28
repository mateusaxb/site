const itens = Array.prototype.slice.call(document.getElementsByClassName("aaa"))
var t = document.getElementById("logo")
itens.forEach(element => {
    element.onclick = (e)=>{
        window.open(`./pages/${(()=>{
                let a = element.children[1].textContent.toLocaleLowerCase().split(" ")
                let aa = a.length
                let fim = ""

                for (let index = 0; index < aa; index++) {
                    fim = fim + a[index]
                }
                console.log(fim)

                return `${fim}`
            })()
        }.html`)
    }
});
