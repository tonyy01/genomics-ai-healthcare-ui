import './Dropdown.css';
export interface DropdownOption {
    value: string | number;
    label: string;
    icon?: string;
    disabled?: boolean;
}
interface DropdownProps {
    options: DropdownOption[];
    value: string | number | null;
    onChange: (value: string | number) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    variant?: 'default' | 'outlined';
}
declare const Dropdown: import("react").NamedExoticComponent<DropdownProps>;
export default Dropdown;
