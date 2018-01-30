import { Canvas } from './Canvas';
import { KeyboardInteractions } from './KeyboardInteractions';
import { Renderer } from './Renderer';

export class App {
    private canvas: Canvas;
    private renderer: Renderer;
    private keyboardInteractions: KeyboardInteractions;

    constructor() {
        this.canvas = new Canvas();
        this.renderer = new Renderer();
        this.keyboardInteractions = new KeyboardInteractions(this.canvas);
    }

    /**
     * start
     */
    public start(): void {
        this.keyboardInteractions.createInteractions();

        this.canvas.onResize(() => {

        });

        this.renderer.addCallback(() => this.canvas.clear());

        this.renderer.startLoop();
    }
}
