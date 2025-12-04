import './Tabs.css';
export interface TabItem {
    id: string;
    label: string;
    content: React.ReactNode;
    icon?: string;
    disabled?: boolean;
}
export interface TabsProps {
    tabs: TabItem[];
    defaultTab?: string;
    onChange?: (tabId: string) => void;
    variant?: 'default' | 'pills' | 'underline';
    className?: string;
}
declare const Tabs: import("react").NamedExoticComponent<TabsProps>;
export default Tabs;
