import * as S from "./styles";

const Main = ({
  title = "Terraform Essentials",
  description = "IaC, Platform, Core Concepts and Project",
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/terraform-logo-3.jpeg"
      alt="Imagem de um átomo e Terraform Essentials escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
);

export default Main;
