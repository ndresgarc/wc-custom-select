export const createCustomSelect = function (props) {
    return `

        <style>
            :root {
                --cs-button--background: ${props.css_button_background};
            }
        </style>

        <custom-select>
            <option value="1">${props.label}</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
        </custom-select>
        
    `;
}
