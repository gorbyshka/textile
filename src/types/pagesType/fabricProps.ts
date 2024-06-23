
export interface FabricCardProps {

    image: string;
    name: string;
    price: string;
    onClickOrder: (index: number) => void;
    isOpen: boolean;
    index: number;
    onCancelOrder: () => void;

};
