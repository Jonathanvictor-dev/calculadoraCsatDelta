const form = document.getElementById('form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const promotor = Number(document.getElementById('promotor').value);
            const detrator = Number(document.getElementById('detrator').value);

            const totalCsat = (promotor + detrator); 
            const csat = ((promotor / totalCsat)*100).toFixed(2);
            const delta = ((detrator * 9) - promotor);

            const valorCsat = document.getElementById('valor-csat');
            let deltaCsat = '';

            const termometroValor = document.getElementById('termometro-valor-visivel');
            let termometroValorVisivel = '';

            valorCsat.classList.add('alerta-positivo');
            valorCsat.classList.add('alerta-atencao');
            valorCsat.classList.add('alerta-negativo');

            termometroValor.classList.add('alerta-positivo');
            termometroValor.classList.add('alerta-atencao');
            termometroValor.classList.add('alerta-negativo');

            document.getElementById('info').classList.remove('info-escondida');
            document.getElementById('termometro-valor').classList.add('termometro-valor-esconder');

            if(csat < 79) {
                deltaCsat = `Qtd de promotor para recuperar os 90%: ${delta}`;
                valorCsat.classList.add('alerta-negativo');
                termometroValor.classList.add('alerta-negativo');
            } else if(csat >= 80 && csat <= 89) {
                deltaCsat = `Qtd de promotor para recuperar os 90%: ${delta}`;
                valorCsat.classList.add('alerta-atencao');
                valorCsat.classList.remove('alerta-negativo');
                termometroValor.classList.add('alerta-atencao');
                termometroValor.classList.remove('alerta-negativo');
            } else {
                deltaCsat = `Parabéns, continue assim!`;
                valorCsat.classList.remove('alerta-atencao');
                valorCsat.classList.remove('alerta-negativo');
                valorCsat.classList.add('alerta-positivo');
                termometroValor.classList.remove('alerta-atencao');
                termometroValor.classList.remove('alerta-negativo');
                termometroValor.classList.add('alerta-positivo');
            };

            valorCsat.textContent = csat;
            document.getElementById('delta-Csat').textContent = deltaCsat;

            termometroValor.textContent = parseInt(csat) + `°`;
        });