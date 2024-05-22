import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class btnCallPopupControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    
    constructor()
    {

    }

    /**
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {
        const button: HTMLButtonElement = document.createElement("button");
        button.innerText = "Click me";
        button.addEventListener("click",()=>{
            alert(`Hello World\nUser Name: ${context.userSettings.userName}\nUser ID: ${context.userSettings.userId}`);
        });
        container.appendChild(button);
    }


    /**
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
    }

    /**
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs
    {
        return {};
    }

    
    public destroy(): void
    {
    }
}
