import { Children, Component } from "react";
import './PageTemplate.sass';

class PageTemplate extends Component {
    render() {
        const { children } = this.props;

        return (
            <div class="pageTemplate">
                {children}
            </div>
        )
    }
}

export default PageTemplate;