// import { IInputs, IOutputs } from "./generated/ManifestTypes";

// export class TextInputControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
//     private myNotifyOutputChanged: () => void;
//     private myMainDiv: HTMLDivElement;
//     private myTextBox: HTMLTextAreaElement;
//     private myLabel: HTMLLabelElement;
//     private myButton: HTMLButtonElement;
//     private myButtonHandler: (event: MouseEvent) => void;  // Changed: specified type
//     private myisUpperCaseOnly: boolean;
//     private myTextBoxHandler: (event: Event) => void;  // Changed: specified type

//     /**
//      * Empty constructor.
//      */
//     constructor() {}

//     /**
//      * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
//      * Data-set values are not initialized here, use updateView.
//      * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
//      * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
//      * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
//      * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
//      */
//     public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
//         this.myNotifyOutputChanged = notifyOutputChanged;
//         this.myMainDiv = document.createElement("div");
        
//         // Create myTextBox and a text box
//         this.myTextBox = document.createElement("textarea");
//         this.myTextBox.value = context.parameters.textValue.raw || "";
//         this.myMainDiv.appendChild(this.myTextBox);
//         this.myTextBoxHandler = this.myTextBoxHasChanged.bind(this) as (event: Event) => void;  // Changed: specified type
//         this.myTextBox.addEventListener("input", this.myTextBoxHandler);

//         // Create label
//         this.myLabel = document.createElement("label");
//         this.myMainDiv.appendChild(this.myLabel);

//         // Create button
//         this.myButton = document.createElement("button");
//         this.myButton.textContent = "Click me";
//         this.myButtonHandler = this.myButtonClicked.bind(this) as (event: MouseEvent) => void;  // Changed: specified type
//         this.myButton.addEventListener("click", this.myButtonHandler);
//         this.myMainDiv.appendChild(this.myButton);

//         // Add everything into container
//         container.appendChild(this.myMainDiv);
//     }

//     public myTextBoxHasChanged(event: Event): void {  // Changed: added event parameter with specified type
//         this.myNotifyOutputChanged();
//     }

//     /**
//      * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
//      * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
//      */
//     public myButtonClicked(event: MouseEvent): void {  // Changed: added event parameter with specified type
//         this.myisUpperCaseOnly = !this.myisUpperCaseOnly;
//         if (this.myisUpperCaseOnly) {
//             this.myLabel.innerHTML = "UPPER CASE ONLY 2";
//             this.myTextBox.value = this.myTextBox.value.toUpperCase();
//         } else if (!this.myisUpperCaseOnly && this.myLabel.innerHTML != "UPPER/lower case 2") {
//             this.myLabel.innerHTML = "UPPER/lower case 2";
//         }

//         this.myNotifyOutputChanged();
//     }

//     public updateView(context: ComponentFramework.Context<IInputs>): void {
//         // Add code to update control view
//         // Updates values
//         this.myTextBox.value = context.parameters.textValue.raw || "";
//         if (this.myisUpperCaseOnly) {
//             this.myLabel.innerHTML = "UPPER CASE ONLY 2";
//             this.myTextBox.value = this.myTextBox.value.toUpperCase();
//         } else if (!this.myisUpperCaseOnly && this.myLabel.innerHTML != "UPPER/lower case 2") {
//             this.myLabel.innerHTML = "UPPER/lower case 2";
//         }

//         this.myNotifyOutputChanged();
//     }

//     /**
//      * It is called by the framework prior to a control receiving new data.
//      * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
//      */
//     public getOutputs(): IOutputs {
//         return {
//             textValue: this.myTextBox.value
//         };
//     }

//     /**
//      * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
//      * i.e. cancelling any pending remote calls, removing listeners, etc.
//      */
//     public destroy(): void {
//         // Add code to cleanup control if necessary
//     }
// }




import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class TextInputControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private notifyOutputChanged: () => void;
    private textBox: HTMLTextAreaElement;

    constructor() {}

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
        this.notifyOutputChanged = notifyOutputChanged;

        this.textBox = document.createElement("textarea");
        this.textBox.value = context.parameters.textValue.raw || "";
        this.textBox.addEventListener("input", () => this.notifyOutputChanged());

        container.appendChild(this.textBox);
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        this.textBox.value = context.parameters.textValue.raw || "";
    }

    public getOutputs(): IOutputs {
        return {
            textValue: this.textBox.value
        };
    }

    public destroy(): void {
        // Cleanup if necessary
    }
}
