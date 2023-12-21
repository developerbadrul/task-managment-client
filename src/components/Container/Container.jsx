/* eslint-disable react/prop-types */

const Container = ({children}) => {
    return (
        <div className="min-h-screen w-11/12 mx-auto">
            {children}
        </div>
    );
};

export default Container;