import css from "./Button.module.css"

export const Button = ({ btnName, onClick }) => {
    return (
        <button className={ css.loadMoreBtn}type="button" onClick={onClick}>{btnName}</button>
    )
 };