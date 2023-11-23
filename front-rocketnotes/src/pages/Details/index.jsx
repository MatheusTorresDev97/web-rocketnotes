import { useState, useEffect } from "react";
import { Container, Links, Content } from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import Header from "../../components/Header";
import Section from "../../components/Section";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Tag from "../../components/Tag";

const Details = () => {
  const [data, setData] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm) {
        await api.delete(`/notes/${id}`)
        navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${id}`);
      setData(response.data);
    }

    fetchNote();
  }, [id]);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir nota" onCLick={handleRemove}/>

            <h1>{data.title}</h1>

            <p>{data.description}</p>
            {data.links && (
              <Section title="Links utéis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}
            <Button title="Voltar" onCLick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  );
};

export default Details;
