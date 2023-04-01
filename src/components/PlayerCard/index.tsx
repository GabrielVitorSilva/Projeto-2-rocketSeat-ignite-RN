import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Name } from "./style";

type Props = {
    name: String;
    onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: Props) {
    return (
        <Container style={{marginBottom: 10}}>

            <Icon
                name='person'
            />

            <Name>
                {name}
            </Name>
            <ButtonIcon
                icon='close'
                type="SECONDARY"
                onPress={onRemove}
            />
        </Container>
    )
}