const Formulario = document.getElementById("Formulario");
Formulario.addEventListener('submit', v => {
    v.preventDefault();
    const FormData = new FormData(Paes);
    
    const pao = {};

    formData.forEach((valor, atributo) => pao[atributo] = valor);

    fetch( "http://10.5.9.21/paes", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(pao)

    }).then(r => r.json())
    .then(data => alert('Pão Feito'))
    .catch(err => alert(err));
    
})

/*  const meuForm = document.getElementById("meuForm");
    const preencherFotoForm = document.getElementById("preencherFotoForm");
    const nomeError = document.getElementById('nomeError');

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    meuForm.addEventListener('submit', ev => {
      ev.preventDefault();
      const formData = new FormData(meuForm);
      const produto = {};


      formData.forEach((valor, atributo) => produto[atributo] = valor);

      if(produto.nome.length < 5) {
        console.log('here error')
        nomeError.style = { display: 'block', color: 'red'}
        return;
      }

      console.log(JSON.stringify(produto))
      fetch('http://localhost:38000/app/produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(produto)
      })
        .then(r => r.json())
    })

    preencherFotoForm.addEventListener('submit', ev2 => {
      ev2.preventDefault();
      
     
      const formData2 = new FormData(preencherFotoForm);
      fetch('http://localhost:38000/app/produtos/' + id + '/photo', {
        method: 'PUT',
        body: formData2
      })
        .then(r => r.json())
    })

    function loadProduto() {
     
      if (id) {
        

        fetch('http://localhost:38000/app/produtos/' + id)
          .then(r => r.json())
          .then(produto => {
            console.log(produto)
            document.getElementById("nome").value = produto.nome
            document.getElementById("descricao").value = produto.descricao
            document.getElementById("preco").value = produto.preco
            document.getElementById("serie").value = produto.serie

          })

      } else {
        document.getElementById('preencherFotoDiv').style.display="none"
      }
    }


    loadProduto();*/