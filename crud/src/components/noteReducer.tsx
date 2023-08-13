import React from 'react'

type Props = {}

function noteReducer({state, action}: any) {
    switch (action.type) {
        case "ADD_NOTE":
            return {
                ...state,
                notes: [state.notes, action.onDelete],
            };
    }
  return (
    <div>noteReducer</div>
  )
}

export default noteReducer