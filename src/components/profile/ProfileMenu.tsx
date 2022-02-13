import React, {FC} from 'react';

interface IProfileMenu {
    setMenuItemActive: (num: number) => void;
    menuItemActive: number;
}

/**
 * Верхнее меню в профиле продавца
 * @returns JSX
 */
const ProfileMenu: FC<IProfileMenu> = (props: IProfileMenu) => {
    
    const {setMenuItemActive, menuItemActive} = props;

	return(
        <div className="profile-menu">
            <button
                onClick={() => setMenuItemActive(1)}
                className={menuItemActive === 1 ? 'active' : ''}>
                {
                    menuItemActive === 1 ?
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 2C8.26875 2 2 8.26875 2 16C2 23.7313 8.26875 30 16 30C23.7313 30 30 23.7313 30 16C30 8.26875 23.7313 2 16 2ZM16 27.625C9.58125 27.625 4.375 22.4188 4.375 16C4.375 9.58125 9.58125 4.375 16 4.375C22.4188 4.375 27.625 9.58125 27.625 16C27.625 22.4188 22.4188 27.625 16 27.625Z" fill="white"/>
                        <path d="M14.5 10.5C14.5 10.8978 14.658 11.2794 14.9393 11.5607C15.2206 11.842 15.6022 12 16 12C16.3978 12 16.7794 11.842 17.0607 11.5607C17.342 11.2794 17.5 10.8978 17.5 10.5C17.5 10.1022 17.342 9.72064 17.0607 9.43934C16.7794 9.15804 16.3978 9 16 9C15.6022 9 15.2206 9.15804 14.9393 9.43934C14.658 9.72064 14.5 10.1022 14.5 10.5ZM16.75 14H15.25C15.1125 14 15 14.1125 15 14.25V22.75C15 22.8875 15.1125 23 15.25 23H16.75C16.8875 23 17 22.8875 17 22.75V14.25C17 14.1125 16.8875 14 16.75 14Z" fill="white"/>
                    </svg> :
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 2C8.26875 2 2 8.26875 2 16C2 23.7313 8.26875 30 16 30C23.7313 30 30 23.7313 30 16C30 8.26875 23.7313 2 16 2ZM16 27.625C9.58125 27.625 4.375 22.4188 4.375 16C4.375 9.58125 9.58125 4.375 16 4.375C22.4188 4.375 27.625 9.58125 27.625 16C27.625 22.4188 22.4188 27.625 16 27.625Z" fill="#43B727"/>
                        <path d="M14.5 10.5C14.5 10.8978 14.658 11.2794 14.9393 11.5607C15.2206 11.842 15.6022 12 16 12C16.3978 12 16.7794 11.842 17.0607 11.5607C17.342 11.2794 17.5 10.8978 17.5 10.5C17.5 10.1022 17.342 9.72064 17.0607 9.43934C16.7794 9.15804 16.3978 9 16 9C15.6022 9 15.2206 9.15804 14.9393 9.43934C14.658 9.72064 14.5 10.1022 14.5 10.5ZM16.75 14H15.25C15.1125 14 15 14.1125 15 14.25V22.75C15 22.8875 15.1125 23 15.25 23H16.75C16.8875 23 17 22.8875 17 22.75V14.25C17 14.1125 16.8875 14 16.75 14Z" fill="#43B727"/>
                    </svg>
                }
                <span>Информация</span>
            </button>

            <button
                onClick={() => setMenuItemActive(2)}
                className={menuItemActive === 2 ? 'active' : ''}>
                {
                    menuItemActive === 2 ?
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.04 3.96C28.9346 4.85467 29.4372 6.06809 29.4372 7.33334C29.4372 8.59858 28.9346 9.812 28.04 10.7067L12.0827 26.6667C11.7135 27.036 11.2544 27.3025 10.7507 27.44L3.92932 29.3C3.75931 29.3461 3.58013 29.3465 3.40991 29.3012C3.23969 29.2558 3.08449 29.1662 2.95999 29.0416C2.83549 28.917 2.74613 28.7617 2.70094 28.5914C2.65575 28.4211 2.65634 28.242 2.70265 28.072L4.56265 21.2507C4.70012 20.7469 4.96668 20.2878 5.33599 19.9187L21.2933 3.96C22.188 3.06535 23.4014 2.56274 24.6667 2.56274C25.9319 2.56274 27.1453 3.06535 28.04 3.96ZM20 8.08L6.74932 21.3333C6.62638 21.4564 6.53768 21.6095 6.49199 21.7773L5.09199 26.9107L10.2253 25.5107C10.3925 25.4638 10.5446 25.3742 10.6667 25.2507L23.92 12L20 8.08ZM22.7067 5.37334L21.4133 6.66667L25.3333 10.5867L26.6267 9.29334C27.1378 8.77172 27.4225 8.06946 27.4188 7.33914C27.4151 6.60881 27.1234 5.90946 26.607 5.39303C26.0905 4.87661 25.3912 4.58486 24.6609 4.58117C23.9305 4.57748 23.2283 4.86216 22.7067 5.37334Z" fill="white"/>
                    </svg> :
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.04 3.96C28.9346 4.85467 29.4372 6.06809 29.4372 7.33334C29.4372 8.59858 28.9346 9.812 28.04 10.7067L12.0827 26.6667C11.7135 27.036 11.2544 27.3025 10.7507 27.44L3.92932 29.3C3.75931 29.3461 3.58013 29.3465 3.40991 29.3012C3.23969 29.2558 3.08449 29.1662 2.95999 29.0416C2.83549 28.917 2.74613 28.7617 2.70094 28.5914C2.65575 28.4211 2.65634 28.242 2.70265 28.072L4.56265 21.2507C4.70012 20.7469 4.96668 20.2878 5.33599 19.9187L21.2933 3.96C22.188 3.06535 23.4014 2.56274 24.6667 2.56274C25.9319 2.56274 27.1453 3.06535 28.04 3.96ZM20 8.08L6.74932 21.3333C6.62638 21.4564 6.53768 21.6095 6.49199 21.7773L5.09199 26.9107L10.2253 25.5107C10.3925 25.4638 10.5446 25.3742 10.6667 25.2507L23.92 12L20 8.08ZM22.7067 5.37334L21.4133 6.66667L25.3333 10.5867L26.6267 9.29334C27.1378 8.77172 27.4225 8.06946 27.4188 7.33914C27.4151 6.60881 27.1234 5.90946 26.607 5.39303C26.0905 4.87661 25.3912 4.58486 24.6609 4.58117C23.9305 4.57748 23.2283 4.86216 22.7067 5.37334Z" fill="#43B727"/>
                    </svg>
                }
                <span>Редактировать страницу магазина</span>
            </button>

            <button
                onClick={() => setMenuItemActive(3)}
                className={menuItemActive === 3 ? 'active' : ''}>
                {
                    menuItemActive === 3 ?
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.1683 2H5.73794C3.95255 2 2.5 3.45255 2.5 5.23794V11.6683C2.5 13.4537 3.95255 14.9062 5.73794 14.9062H12.1683C13.9537 14.9062 15.4062 13.4537 15.4062 11.6683V5.23794C15.4062 3.45255 13.9537 2 12.1683 2ZM13.2188 11.6683C13.2188 12.2475 12.7475 12.7188 12.1683 12.7188H5.73794C5.15874 12.7188 4.6875 12.2475 4.6875 11.6683V5.23794C4.6875 4.65874 5.15874 4.1875 5.73794 4.1875H12.1683C12.7475 4.1875 13.2188 4.65874 13.2188 5.23794V11.6683Z" fill="white"/>
                        <path d="M27.2188 2H20.875C19.0657 2 17.5938 3.47197 17.5938 5.28125V11.625C17.5938 13.4343 19.0657 14.9062 20.875 14.9062H27.2188C29.028 14.9062 30.5 13.4343 30.5 11.625V5.28125C30.5 3.47197 29.028 2 27.2188 2ZM28.3125 11.625C28.3125 12.2281 27.8218 12.7188 27.2188 12.7188H20.875C20.2719 12.7188 19.7812 12.2281 19.7812 11.625V5.28125C19.7812 4.67816 20.2719 4.1875 20.875 4.1875H27.2188C27.8218 4.1875 28.3125 4.67816 28.3125 5.28125V11.625Z" fill="white"/>
                        <path d="M12.1683 17.0938H5.73794C3.95255 17.0938 2.5 18.5463 2.5 20.3317V26.7621C2.5 28.5474 3.95255 30 5.73794 30H12.1683C13.9537 30 15.4062 28.5474 15.4062 26.7621V20.3317C15.4062 18.5463 13.9537 17.0938 12.1683 17.0938ZM13.2188 26.7621C13.2188 27.3413 12.7475 27.8125 12.1683 27.8125H5.73794C5.15874 27.8125 4.6875 27.3413 4.6875 26.7621V20.3317C4.6875 19.7525 5.15874 19.2812 5.73794 19.2812H12.1683C12.7475 19.2812 13.2188 19.7525 13.2188 20.3317V26.7621Z" fill="white"/>
                        <path d="M27.2188 17.0938H20.875C19.0657 17.0938 17.5938 18.5657 17.5938 20.375V26.7188C17.5938 28.528 19.0657 30 20.875 30H27.2188C29.028 30 30.5 28.528 30.5 26.7188V20.375C30.5 18.5657 29.028 17.0938 27.2188 17.0938ZM28.3125 26.7188C28.3125 27.3218 27.8218 27.8125 27.2188 27.8125H20.875C20.2719 27.8125 19.7812 27.3218 19.7812 26.7188V20.375C19.7812 19.7719 20.2719 19.2812 20.875 19.2812H27.2188C27.8218 19.2812 28.3125 19.7719 28.3125 20.375V26.7188Z" fill="white"/>
                    </svg>  :
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.1683 2H5.73794C3.95255 2 2.5 3.45255 2.5 5.23794V11.6683C2.5 13.4537 3.95255 14.9062 5.73794 14.9062H12.1683C13.9537 14.9062 15.4062 13.4537 15.4062 11.6683V5.23794C15.4062 3.45255 13.9537 2 12.1683 2ZM13.2188 11.6683C13.2188 12.2475 12.7475 12.7188 12.1683 12.7188H5.73794C5.15874 12.7188 4.6875 12.2475 4.6875 11.6683V5.23794C4.6875 4.65874 5.15874 4.1875 5.73794 4.1875H12.1683C12.7475 4.1875 13.2188 4.65874 13.2188 5.23794V11.6683Z" fill="#43B727"/>
                        <path d="M27.2188 2H20.875C19.0657 2 17.5938 3.47197 17.5938 5.28125V11.625C17.5938 13.4343 19.0657 14.9062 20.875 14.9062H27.2188C29.028 14.9062 30.5 13.4343 30.5 11.625V5.28125C30.5 3.47197 29.028 2 27.2188 2ZM28.3125 11.625C28.3125 12.2281 27.8218 12.7188 27.2188 12.7188H20.875C20.2719 12.7188 19.7812 12.2281 19.7812 11.625V5.28125C19.7812 4.67816 20.2719 4.1875 20.875 4.1875H27.2188C27.8218 4.1875 28.3125 4.67816 28.3125 5.28125V11.625Z" fill="#43B727"/>
                        <path d="M12.1683 17.0938H5.73794C3.95255 17.0938 2.5 18.5463 2.5 20.3317V26.7621C2.5 28.5474 3.95255 30 5.73794 30H12.1683C13.9537 30 15.4062 28.5474 15.4062 26.7621V20.3317C15.4062 18.5463 13.9537 17.0938 12.1683 17.0938ZM13.2188 26.7621C13.2188 27.3413 12.7475 27.8125 12.1683 27.8125H5.73794C5.15874 27.8125 4.6875 27.3413 4.6875 26.7621V20.3317C4.6875 19.7525 5.15874 19.2812 5.73794 19.2812H12.1683C12.7475 19.2812 13.2188 19.7525 13.2188 20.3317V26.7621Z" fill="#43B727"/>
                        <path d="M27.2188 17.0938H20.875C19.0657 17.0938 17.5938 18.5657 17.5938 20.375V26.7188C17.5938 28.528 19.0657 30 20.875 30H27.2188C29.028 30 30.5 28.528 30.5 26.7188V20.375C30.5 18.5657 29.028 17.0938 27.2188 17.0938ZM28.3125 26.7188C28.3125 27.3218 27.8218 27.8125 27.2188 27.8125H20.875C20.2719 27.8125 19.7812 27.3218 19.7812 26.7188V20.375C19.7812 19.7719 20.2719 19.2812 20.875 19.2812H27.2188C27.8218 19.2812 28.3125 19.7719 28.3125 20.375V26.7188Z" fill="#43B727"/>
                    </svg>
                                      
                }
                <span>Категории</span>
            </button>

            <button
                onClick={() => setMenuItemActive(4)}
                className={menuItemActive === 4 ? 'active' : ''}>
                {
                    menuItemActive === 4 ?
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.346 2.75788C15.7325 2.22459 17.2675 2.22459 18.654 2.75788L28.578 6.57388C29.736 7.01989 30.5 8.13388 30.5 9.37388V22.6259C30.5001 23.2321 30.3165 23.8242 29.9734 24.324C29.6303 24.8239 29.1438 25.208 28.578 25.4259L18.654 29.2439C17.2675 29.7772 15.7325 29.7772 14.346 29.2439L4.424 25.4259C3.85786 25.2084 3.37094 24.8243 3.02746 24.3245C2.68399 23.8246 2.50008 23.2324 2.5 22.6259V9.37388C2.50008 8.76739 2.68399 8.17516 3.02746 7.6753C3.37094 7.17543 3.85786 6.79142 4.424 6.57388L14.346 2.75788ZM17.936 4.62388C17.0117 4.26835 15.9883 4.26835 15.064 4.62388L12.296 5.68988L23.476 9.92189L27.372 8.25388L17.936 4.62388ZM28.5 9.94389L17.5 14.6599V27.5159C17.648 27.4779 17.792 27.4319 17.936 27.3759L27.86 23.5599C28.0486 23.4871 28.2107 23.3589 28.3249 23.1922C28.4392 23.0255 28.5002 22.828 28.5 22.6259V9.94589V9.94389ZM15.5 27.5159V14.6599L4.5 9.94589V22.6259C4.49979 22.828 4.56083 23.0255 4.67508 23.1922C4.78933 23.3589 4.95143 23.4871 5.14 23.5599L15.064 27.3759C15.208 27.4319 15.352 27.4779 15.5 27.5159ZM5.628 8.25388L16.5 12.9139L20.828 11.0579L9.494 6.76588L5.628 8.25388Z" fill="white"/>
                    </svg> :
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.346 2.75788C15.7325 2.22459 17.2675 2.22459 18.654 2.75788L28.578 6.57388C29.736 7.01989 30.5 8.13388 30.5 9.37388V22.6259C30.5001 23.2321 30.3165 23.8242 29.9734 24.324C29.6303 24.8239 29.1438 25.208 28.578 25.4259L18.654 29.2439C17.2675 29.7772 15.7325 29.7772 14.346 29.2439L4.424 25.4259C3.85786 25.2084 3.37094 24.8243 3.02746 24.3245C2.68399 23.8246 2.50008 23.2324 2.5 22.6259V9.37388C2.50008 8.76739 2.68399 8.17516 3.02746 7.6753C3.37094 7.17543 3.85786 6.79142 4.424 6.57388L14.346 2.75788ZM17.936 4.62388C17.0117 4.26835 15.9883 4.26835 15.064 4.62388L12.296 5.68988L23.476 9.92189L27.372 8.25388L17.936 4.62388ZM28.5 9.94389L17.5 14.6599V27.5159C17.648 27.4779 17.792 27.4319 17.936 27.3759L27.86 23.5599C28.0486 23.4871 28.2107 23.3589 28.3249 23.1922C28.4392 23.0255 28.5002 22.828 28.5 22.6259V9.94589V9.94389ZM15.5 27.5159V14.6599L4.5 9.94589V22.6259C4.49979 22.828 4.56083 23.0255 4.67508 23.1922C4.78933 23.3589 4.95143 23.4871 5.14 23.5599L15.064 27.3759C15.208 27.4319 15.352 27.4779 15.5 27.5159ZM5.628 8.25388L16.5 12.9139L20.828 11.0579L9.494 6.76588L5.628 8.25388Z" fill="#43B727"/>
                    </svg>                                       
                }
                <span>Товары</span>
            </button>
        </div>
    );
};

export default ProfileMenu;