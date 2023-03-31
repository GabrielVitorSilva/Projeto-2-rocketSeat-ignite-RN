import { Header } from "@components/Header";
import { Container, Content, Icon } from "./style";
import { Highlight } from "@components/HigthLigth";
import { Button } from "@components/Button";
import Input from "@components/Input";

export function NewGroup() {
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />

                <Highlight
                    title="Nova turma"
                    subtitle="crie a turma para adicionar as pessoas"
                />
                <Input 
                     style={{ marginBottom: 20 }}
                     placeholder="Digite o nome da turma: "
                />

                <Button
                    title="Criar"
                />
            </Content>
        </Container>
    )
}