import React, {FC, ReactElement} from 'react';

export interface IButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    text?: string | ReactElement;
    classlist?: string;
    style?: object;
    onClick?: (args?: any) => void;
}

const Button: FC<IButtonProps> = (props: IButtonProps) => {
    const {type, text, classlist, style, onClick} = props;
	return(
        <button
            type={type ? type : "button"}
            className={classlist ? "uk-button " + classlist : "uk-button uk-button-default"}
            style={style}
            onClick={onClick}
        >
            {text ? text : 'Button'}
        </button>
    );
};

export default Button;