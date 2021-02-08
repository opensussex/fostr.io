import React from 'react';

function WithListLoading(Component) {
    return function WihLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return (
            <p className="WithListLoading">
                Hold on, fetching data may take some time :)
            </p>
        );
    };
}
export default WithListLoading;