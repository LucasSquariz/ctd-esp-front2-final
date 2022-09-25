import * as styled from "../../styled";
import { ModalPremiumProps } from "./types";

export const ModalPremium = ({ setModal, Close, AssinarImage }: ModalPremiumProps) => {
    return (
        <>
            <styled.ContainerModal>
                <styled.CardModal>
                    <styled.CloseButton onClick={() => setModal(null)}>
                        <img src={Close} alt="close-button" />
                    </styled.CloseButton>
                    <styled.ImageModal src={AssinarImage} alt="mr-burns-excelent" />
                    <styled.ContainerTexto>
                        <styled.TituloModal>Assine a nossa newsletter</styled.TituloModal>
                        <styled.DescriptionModal>
                            Assine nossa newsletter e receba novidades de nossos
                            personagens favoritos
                        </styled.DescriptionModal>
                        <styled.BotaoAssinar
                            onClick={() =>
                                setTimeout(() => {
                                    alert("Suscripto!");
                                    setModal(null);
                                }, 1000)
                            }
                        >
                            Assinar
                        </styled.BotaoAssinar>
                    </styled.ContainerTexto>
                </styled.CardModal>
            </styled.ContainerModal>
        </ >
    )

}

