import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

export default class Article extends Component {
    render() {
        const { title, img } = this.props
        return (
            <div style={{ width: '300px', height: '300px', marginBottom: '100px' }}>
                <Card>
                    <CardImg top width="100%" src={img} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{title}</CardTitle>
                    </CardBody>
                </Card>
            </div>
        )
    }
}