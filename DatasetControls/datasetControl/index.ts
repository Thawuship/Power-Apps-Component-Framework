
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import DataSetInterfaces = ComponentFramework.PropertyHelper.DataSetApi;
type DataSet = ComponentFramework.PropertyTypes.DataSet;

export class datasetControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private _container: HTMLDivElement;

    constructor() {
        // Initialize any required variables here
    }

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
        this._container = container; // Assign the container
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        // Clear the existing content
        this._container.innerHTML = ""; 

        // Create and append table
        const table = document.createElement("table");

        // Create table header
        const headerRow = document.createElement("tr");
        context.parameters.sampleDataSet.columns.forEach(columnItem => {
            const th = document.createElement("th");
            th.textContent = columnItem.displayName;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        // Create table rows
        context.parameters.sampleDataSet.sortedRecordIds.forEach(recordId => {
            const tr = document.createElement("tr");
            context.parameters.sampleDataSet.columns.forEach(columnItem => {
                const td = document.createElement("td");
                td.textContent = context.parameters.sampleDataSet.records[recordId].getFormattedValue(columnItem.name);
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });

        this._container.appendChild(table);
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
