import eventReducer from "./event.reducer";

describe("testing event Reducer", () => {
  it("test to create new event", () => {
    const initialState = {
      event: []
    };
    const action = {
      type: "CREATE_EVENT",
      payload: {
        id: 1,
        title: "Topic 1",
        eventAttendee: []
      }
    };
    const updateState = eventReducer(initialState, action);
    expect(updateState).toEqual({
      event: [
        {
          eventId: 1,
          eventTopic: "Topic 1",
          eventAttendee: []
        }
      ]
    });
  });
  it("test to filter out the cancel event", () => {
    const initialState = {
      event: [
        {
          eventId: 1,
          eventTopic: "Topic 1",
          eventAttendee: []
        },
        {
          eventId: 2,
          eventTopic: "Topic 2",
          eventAttendee: []
        }
      ]
    };
    const action = {
      type: "CANCEL_EVENT",
      payload: { eventId: 2 }
    };

    const updateState = eventReducer(initialState, action);

    expect(updateState).toEqual({
      event: [
        {
          eventId: 1,
          eventTopic: "Topic 1",
          eventAttendee: []
        }
      ]
    });
  });
  it("test to add attendence on a specfic event", () => {
    const initialState = {
      event: [
        {
          eventId: 1,
          eventTopic: "Topic 1",
          eventAttendee: []
        }
      ]
    };
    const action = {
      type: "ADD_ATTENDEE",
      payload: {
        id: 1,
        attendee: {
          id: 1,
          name: "User 1",
          isAttendent: true
        }
      }
    };
    const updateState = eventReducer(initialState, action);

    expect(updateState).toEqual({
      event: [
        {
          eventId: 1,
          eventTopic: "Topic 1",
          eventAttendee: [
            {
              id: 1,
              name: "User 1",
              isAttendent: true
            }
          ]
        }
      ]
    });
  });
  it("test to remove attendee from the specific event", () => {
    const initialState = {
      event: [
        {
          eventId: 1,
          eventTopic: "Topic 1",
          eventAttendee: [
            {
              id: 1,
              name: "User 1",
              isAttendent: true
            },
            {
              id: 2,
              name: "User 2",
              isAttendent: true
            }
          ]
        }
      ]
    };
    const action = {
      type: "REMOVE_ATTENDEE",
      payload: {
        id: 1,
        attendeeId: 2
      }
    };
    const updateState = eventReducer(initialState, action);

    expect(updateState).toEqual({
      event: [
        {
          eventId: 1,
          eventTopic: "Topic 1",
          eventAttendee: [
            {
              id: 1,
              name: "User 1",
              isAttendent: true
            }
          ]
        }
      ]
    });
  });
});
