import { Component } from "react";
import './PageTemplate.sass';

class PageTemplate extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="pageTemplate">
                {children}
            </div>
        )
    }
}

export default PageTemplate;