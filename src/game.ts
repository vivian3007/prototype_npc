import * as PIXI from 'pixi.js'
import knightImage from "./images/knight.png"
import farmerImage from "./images/farmer.png"
import landlordImage from "./images/landlord.png"
import { Character } from './character'
import { Knight } from './knight'
import { Farmer } from './farmer'

export class Game {
    pixi: PIXI.Application
    loader: PIXI.Loader
    characters: Character[] = []

    constructor() {
        this.pixi = new PIXI.Application({ width: 1600, height: 800, backgroundColor: 0x5FC360})
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader.add('knightTexture', knightImage)
        this.loader.add('farmerTexture', farmerImage)
        this.loader.add('landlordTexture', landlordImage)
        this.loader.load(() => this.loadCompleted())
    }

    loadCompleted(){
        //create knight
        let knight = new Knight(this.loader.resources["knightTexture"].texture!, this, 800, 50)   
        this.characters.push(knight)
        this.pixi.stage.addChild(knight) 

        //create farmer
        let farmer = new Farmer(this.loader.resources["farmerTexture"].texture!, this, 400, 200)   
        this.characters.push(farmer)
        this.pixi.stage.addChild(farmer)  

        //create landlord
        let landlord = new Farmer(this.loader.resources["landlordTexture"].texture!, this, 1000, 300)   
        this.characters.push(landlord)
        this.pixi.stage.addChild(landlord)  
    }

}

let game = new Game()