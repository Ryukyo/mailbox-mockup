import React from 'react'
import '../style/emptySelection.css';

export default function EmptySelection () {
    return (
        <div className="none-selected" role="alert">
            <span>No email selected.</span>
        </div>
    )
}