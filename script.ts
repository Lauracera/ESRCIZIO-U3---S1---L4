fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((capoObj) => {
    console.log(capoObj);

    capoObj.forEach((element) => {
      class Abbigliamento {
        private id: number;
        codprod: number;
        collezione: string;
        capo: string;
        modello: number;
        quantita: number;
        colore: string;
        prezzoivaesclusa: number;
        prezzoivainclusa: number;
        disponibile: number;
        saldo: number;

        constructor(
          private readonly _id: number,
          _codprod: number,
          _collezione: string,
          _capo: string,
          _modello: number,
          _quantita: number,
          _colore: string,
          _prezzoivaesclusa: number,
          _prezzoivainclusa: number,
          _disponibile: number,
          _saldo: number
        ) {
          this.id = _id;
          this.codprod = _codprod;
          this.collezione = _collezione;
          this.capo = _capo;
          this.modello = _modello;
          this.quantita = _quantita;
          this.colore = _colore;
          this.prezzoivaesclusa = _prezzoivaesclusa;
          this.prezzoivainclusa = _prezzoivainclusa;
          this.disponibile = _disponibile;
          this.saldo = _saldo;
        }
        getSaldoCapo(): string {
          let saldo = this.prezzoivainclusa * (this.saldo / 100);
          return saldo.toFixed(2) + " €";
        }

        getAcquistoCapo(): string {
          let prezzoProdotto =
            this.prezzoivainclusa - parseFloat(this.getSaldoCapo());
          return prezzoProdotto.toFixed(2) + " €";
        }
      }

      let capoAbbigliamento: any = new Abbigliamento(
        element.id,
        element.codprod,
        element.collezione,
        element.capo,
        element.modello,
        element.quantita,
        element.colore,
        element.prezzoivaesclusa,
        element.prezzoivainclusa,
        element.disponibile,
        element.saldo
      );

      //   console.log(`Capo d'abbigliamento ${element.id}:` + capoAbbigliamento);
      console.log(`Capo abbigliamento ${element.id}: `, capoAbbigliamento);
      console.log(`Saldo : `, capoAbbigliamento.getSaldoCapo());
      console.log(`Totale capo: `, capoAbbigliamento.getAcquistoCapo());

      //   const container = document.getElementsByClassName("container") as HTMLDivElement;

      //   const card = document.createElement("div");
      //   card.classList.add("card");

      //   container?.appendChild(card);
    });
  })

  .catch((error) => console.log("Si è verificato un errore!" + error));
