import Header from "../../components/Header/Header";
import { Component } from "react";
import './PageTemplate.sass';
import { PropTypes } from 'prop-types';
import { Divider } from "antd";


const cssPrefix = "pageTemplate";
class PageTemplate extends Component {
    render() {
        const { children, logout, userInfo } = this.props;

        return (
            <div className={cssPrefix}>
                <header className={`${cssPrefix}-header`}>
                    <Header 
                        userInfo={userInfo}
                        logout={logout}
                    />
                </header>
                <Divider style={{
                    margin: '0 0 12px 0'
                }}/>
                <main className={`${cssPrefix}-main`}>
                    {children}
                </main>
            </div>
        )
    }
}

PageTemplate.propTypes = {
    userInfo: PropTypes.shape(),
    logout: PropTypes.func.isRequired,
    children: PropTypes.node,
};

PageTemplate.defaultProps = {
    userInfo: undefined,
};

export default PageTemplate;
