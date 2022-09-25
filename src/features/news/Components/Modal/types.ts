export interface ModalProps{
    setModal:(a: null) => void;
    Close: string; 
    modal: {
        image: string;
        titulo: string;
        description: string;

    };
}