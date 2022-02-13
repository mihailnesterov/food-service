import React, {FC} from 'react';

const About: FC = () => {
    document.title = "О сайте";
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
                        <h1 className="uk-text-center">О сайте</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;