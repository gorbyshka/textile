
export interface MenuType {
    id: number;

    title: {
        ru: string;
        ua: string;
    };

    subMenuItems?: MenuType[];

    fabrics?: {
        ru: string[];
        ua: string[];
    };

    icon?: React.FC<{}>;

    currentLanguage?: string; 
};
