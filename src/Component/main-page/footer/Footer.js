import React from 'react'
import './footer.scss'
const footer = () => {
    return (
        <div className="footer">
            <ul className="footer__list">
                <li className="footer__list__label">Links</li>
                <ul className="sublist">
                    <li className="footer__list__item">course</li>
                    <li className="footer__list__item">course</li>
                    <li className="footer__list__item">course</li>
                </ul>
            </ul>
            <ul className="footer__list">
                <li className="footer__list__label">Contact</li>
                <ul className="sublist">
                    <li className="footer__list__item">Email</li>
                </ul>
            </ul>
        </div>
    )
}

export default footer
