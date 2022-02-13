import React, {FC} from 'react';

const Error404: FC = () => {
    document.title = "404 ошибка - страница не найдена";
	return(
        <div className="uk-container-expand uk-padding-remove-top catalog-container">
            <div className="uk-container uk-padding-remove">
                <div className="">
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "300px",
                    }}>
                        <h1 className="uk-text-center">404 страница не найдена</h1>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Error404;