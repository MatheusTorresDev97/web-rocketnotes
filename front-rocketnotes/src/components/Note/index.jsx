import React from 'react'
import Tag from '../Tag'
import { Container } from './styles'

const Note = ({ data, ...props }) => {
    return (
        <Container {...props}>
            <h1>{data.title}</h1>

            {
                data.tags && <footer> {
                    data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                }
                </footer>
            }
        </Container>
    )
}

export default Note