import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

interface HelloProps {
};

interface HelloState {
}

function mapStateToProps(state: any) {
    return {
        
    };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({  }, dispatch)
}

class Hello extends React.Component<HelloProps, HelloState> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <div id="body">
                    Hello Bro!
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);