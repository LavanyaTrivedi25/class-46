class Aeroplane {

    constructor(){

        this.body = createSprite(200,300)
        this.body.addImage(aeroplaneImg)
        this.body.scale = 0.8
        this.body.debug = true
        this.body.setCollider("rectangle", 0,0,400,50)

    }
}