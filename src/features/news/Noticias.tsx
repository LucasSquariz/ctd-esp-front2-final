import { useEffect, useState } from "react";
import { AssinarImage, CloseButton as Close } from "../../assets";
import { obterNoticias } from "./fakeRest";
import { INoticiasNormalizadas } from "./types";
import * as styled from "./styled";

import formatDate from "./Functions/formatDate";
import formatTitle from "./Functions/formatTitle";
import { ModalPremium } from "./Components/ModalPremium";
import { Modal } from "./Components/Modal";

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  useEffect(() => {
    const obterInformacoes = async () => {
      const resposta = await obterNoticias();
      const data = resposta.map((n) => {

        return {
          id: n.id,
          titulo: formatTitle(n),
          description: n.description,
          date: `Faz ${formatDate(n)} minutos`,
          premium: n.premium,
          image: n.image,
          descriptionCurto: n.description.substring(0, 100),
        };
      });

      setNoticias(data);
    };

    obterInformacoes();
  }, []);

  return (
    <styled.ContainerNoticias>
      <styled.TituloNoticias>Noticias dos Simpsons</styled.TituloNoticias>
      <styled.ListaNoticias>
        {noticias.map((n) => (
          <styled.CardNoticia>
            <styled.ImageCardNoticia src={n.image} />
            <styled.TituloCardNoticia>{n.titulo}</styled.TituloCardNoticia>
            <styled.DateCardNoticia>{n.date}</styled.DateCardNoticia>
            <styled.DescriptionCardNoticia>
              {n.descriptionCurto}
            </styled.DescriptionCardNoticia>
            <styled.BotaoLeitura onClick={() => setModal(n)}>Ver más</styled.BotaoLeitura>
          </styled.CardNoticia>
        ))}
        {modal ? (
          modal.premium ? (
            <ModalPremium setModal={setModal} Close={Close} AssinarImage={AssinarImage} />
          ) : (
            <Modal setModal={setModal} Close={Close} modal={modal} />
          )
        ) : null}
      </styled.ListaNoticias>
    </styled.ContainerNoticias>
  );
};

export default Noticias;
