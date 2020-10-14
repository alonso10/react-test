import React from 'react';
import { connect } from 'react-redux';

export function wrapper(WrappedComponent) {
    class ColorHeaderTable extends React.Component {
        render() {
            return <WrappedComponent color={this.props.state.colorTable.value} {...this.props} />;
        }
    }

    const mapStateToProps = state => {
        return { state: state };
    };

    return connect(mapStateToProps)(ColorHeaderTable);
}
