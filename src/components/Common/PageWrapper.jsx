import React from 'react'

export class PageWrapper extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <div className={'page-wrapper'}>
                {children}
            </div>
        )
    }
}