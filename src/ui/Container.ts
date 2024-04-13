/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from "pixi.js"

export class ContainerWrapper extends Container {

    public resize(x: number, y: number) {
        this.x = x
        this.y = y
    }
}