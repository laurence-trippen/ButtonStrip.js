declare module 'buttonstrip.js' {
  interface ButtonStripOptions {
    id: string;
  }

  interface Button {
    name: string;
    active: boolean;
    event: {
      type: string;
      callback: EventListenerOrEventListenerObject;
    };
  }

  class ButtonStrip {
    private readonly id: string;
    private readonly buttons: Button[];
    private readonly activeSelector?: string;

    constructor(options: ButtonStripOptions);

    addButton(pName: string, pActive: boolean, pType: string, pCallback: EventListenerOrEventListenerObject): void;
    append(element: string): void;
  }

  export default ButtonStrip;
}
