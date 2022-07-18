import React from "react";
import PropTypes from 'prop-types';
import { cancelModal } from "../store/action";
import '../styles/App.css'

const cancel = () => {
    cancelModal()
    document.getElementById('main').classList.remove('opacity')
}

const Modal = (data) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span onClick={cancel} className="cancel">X</span>
                <p>{data.content}</p>
            </div>
        </div>
    )
}

Modal.prototype = {
    data: PropTypes.object,
    content: PropTypes.string
};

export default Modal;