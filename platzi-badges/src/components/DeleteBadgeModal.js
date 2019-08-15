import React from 'react'

import Modal from './Modal'

export default function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1 className="text-center">Are You Sure?</h1>
        <p className="py-2">You are about to delete this badge.</p>

        <div className="d-flex justify-content-around align-items-center">
          <button className="btn btn-danger" onClick={props.onDeleteBadge}>Delete</button>
          <button className="btn btn-primary" onClick={props.onClose}>Cancel</button>
        </div>
      </div>
    </Modal>
  )
}