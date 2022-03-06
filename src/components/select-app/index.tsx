
interface QuotationProps{
    options:Options[];
    onChanged: Function;
 }

class Options {
    constructor(
        public label: any, 
        public value: any,
    ) {}
}

function SelectApp({options, onChanged}: QuotationProps) {

    const handleChange = selectedOption => {
        if (typeof onChanged !== 'undefined' && onChanged != null) {
            onChanged(selectedOption.target.value);
        }
      };

    return (
        <div>
            <select
            onChange={handleChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

export {SelectApp, Options};