import * as styled from "../../styled";
import { ModalProps } from "./types";

export const Modal = ({setModal, Close, modal}: ModalProps) => {
    return (
        <>
            <styled.ContainerModal>
                <styled.CardModal>
                    <styled.CloseButton onClick={() => setModal(null)}>
                        <img src={Close} alt="close-button" />
                    </styled.CloseButton>
                    <styled.ImageModal src={modal.image} alt="news-image" />
                    <styled.ContainerTexto>
                        <styled.TituloModal>{modal.titulo}</styled.TituloModal>
                        <styled.DescriptionModal>{modal.description}</styled.DescriptionModal>
                    </styled.ContainerTexto>
                </styled.CardModal>
            </styled.ContainerModal>
        </>
    )
}
