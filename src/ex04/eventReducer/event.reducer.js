export const initialState = {
    event: []
  };

  function eventReducer(state = initialState, { type, payload }) {
    switch (type) {
      case "CREATE_EVENT": {
        const newEvent = {
          eventId: payload.id,
          eventTopic: payload.title,
          eventAttendee: []
        };
        return {
          ...state,
          event: [...state.event, newEvent]
        };
      }
      case "CANCEL_EVENT": {
        const cancelEvent = state.event.filter(
          (event) => event.eventId !== payload.eventId
        );
        return {
          ...state,
          event: cancelEvent
        };
      }
      case "ADD_ATTENDEE": {
        const addAttendee = state.event.map((event) =>
          event.eventId === payload.id
            ? {
                ...event,
                eventAttendee: [{ ...payload.attendee }]
              }
            : { ...event }
        );
        return {
          ...state,
          event: addAttendee
        };
      }
      case "REMOVE_ATTENDEE": {
        const removeAttende = state.event.map((event) =>
          event.eventId === payload.id
            ? {
                ...event,
                eventAttendee: event.eventAttendee.filter(
                  (attende) => attende.id !== payload.attendeeId
                )
              }
            : { ...event }
        );
        return {
          ...state,
          event: removeAttende
        };
      }
      default:
        return state;
    }
  }

  export default eventReducer;
