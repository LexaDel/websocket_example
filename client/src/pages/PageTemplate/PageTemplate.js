import { Component } from "react";
import './PageTemplate.sass';
import { PropTypes } from 'prop-types';


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

PageTemplate.propTypes = {
    children: PropTypes.node,
};

export default PageTemplate;
