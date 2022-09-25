import { useState } from "react";
import { NomesSimpsons, INFO_SIMPSONS } from "./constants";

import * as styled from "./styled"

const Bio = () => {
  const [bioActive, setBioActive] = useState(INFO_SIMPSONS[NomesSimpsons.BART]);

  const onClick: (nome: NomesSimpsons) => void = (nome) =>
    setBioActive(INFO_SIMPSONS[nome]);

  const criarBotoes = () => {
    return Object.keys(INFO_SIMPSONS).map((nome: string) => (
      <styled.BioButton
        key={nome as string}
        onClick={() => onClick(nome as NomesSimpsons)}
        isActive={
          bioActive.id === nome
            ? true
            : false
        }
      >
        {nome}
      </styled.BioButton>
    ));
  };

  return (
    <styled.BioContainer>
      <styled.ContainerBotoes>{criarBotoes()}</styled.ContainerBotoes>
      <div>
        <div>
          <styled.BioImage
            src={bioActive.image}
            alt={bioActive.nome}            
          />
        </div>
        <div>
          <styled.BioNome>{bioActive.nome}</styled.BioNome>
          <styled.BioDescription>{bioActive.description}</styled.BioDescription>
        </div>
      </div>
    </styled.BioContainer>
  );
};

export default Bio;
