import data from "../memoryGame/data.js"

const tab = {
    
    arrayData: data,
    
    conteinerTab: () =>{
        
        const items =[];
        
        tab.arrayData.map((item)=>{
            items.push(`<p>${item.name}</p>`)
        })
        
        // console.log(tab.arrayData)
        // ${items.join(" ")}
        return `
            <div class="containerTab">
                <div class="playerContainer">
                    <div id="playerAvatar">
                        <img src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/04/hipertextual-sony-quiere-que-robot-te-acompane-mientras-juegas-playstation-5-2020548344.jpg?fit=1920%2C1080&ssl=1">
                    </div>
                    <div id="playerName">Nombre de Astronauta</div>
                </div>

                <div class="containerDescription">
                    <div>
                        <h3>TARJETAS EXPLORATIVAS</h3>
                        <div class="cardOptions">
                        
                        </div>
                    </div>
                
                    <div class="containerHits">
                        <label>ACIERTOS</label>
                        <label>0</label>
                    </div>

                    <div class="timeContainer">
                        <p>00:00</p>
                    </div>

                    <button>PLAY</button>
                </div>

            </div>
        `;
    }

};

export default tab;