import { useState } from "react";

import { Container, Content, Icon } from "./style";

import { Header } from "@components/Header";
import { Highlight } from "@components/HigthLigth";
import { Button } from "@components/Button";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
    const [group, setGroup] = useState('')

    const navigation = useNavigation()

    function handleNew(){
        navigation.navigate('players',{group})
    }
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
                     onChangeText={setGroup}
                />

                <Button
                    onPress={handleNew}
                    title="Criar"
                />
            </Content>
        </Container>
    )
}