import employeeReducer from "./employee.reducer";

describe("testing employee reducer", () => {
  it("test to add new Employee", () => {
    const initialState = {
      employee: []
    };
    const action = {
      type: "ADD_EMPLOYEE",
      payload: {
        useId: 1,
        employeeName: "employee 1",
        salary: 50000,
        role: "role 1"
      }
    };
    const updatedState = employeeReducer(initialState, action);
    expect(updatedState).toEqual({
      employee: [
        {
          id: 1,
          employeeName: "employee 1",
          salary: 50000,
          role: "role 1"
        }
      ]
    });
  });
  it("test to update employee salary", () => {
    const initialState = {
      employee: [
        {
          id: 1,
          employeeName: "employee 1",
          salary: 50000,
          role: "role 1"
        }
      ]
    };
    const action = {
      type: "UPDATE_SALARY",
      payload: {
        id: 1,
        updatedSalary: 5000
      }
    };
    const updatedState = employeeReducer(initialState, action);
    expect(updatedState).toEqual({
      employee: [
        {
          id: 1,
          employeeName: "employee 1",
          salary: 55000,
          role: "role 1"
        }
      ]
    });
  });
  it("test to remove existing Employee", () => {
    const initialState = {
      employee: [
        {
          id: 1,
          employeeName: "employee 1",
          salary: 55000,
          role: "role 1"
        },
        {
          id: 2,
          employeeName: "employee 2",
          salary: 550000,
          role: "role 2"
        }
      ]
    };
    const action = {
      type: "REMOVE_EMPLOYEE",
      payload: { id: 2 }
    };
    const updatedState = employeeReducer(initialState, action);
    expect(updatedState).toEqual({
      employee: [
        {
          id: 1,
          employeeName: "employee 1",
          salary: 55000,
          role: "role 1"
        }
      ]
    });
  });
  it("test to filter using role", () => {
    const initialState = {
      employee: [
        {
          id: 1,
          employeeName: "employee 1",
          salary: 55000,
          role: "role 1"
        },
        {
          id: 2,
          employeeName: "employee  2",
          salary: 550000,
          role: "role 2"
        },
        {
          id: 3,
          employeeName: "employee 3",
          salary: 55000,
          role: "role 1"
        },
        {
          id: 4,
          employeeName: "employee 4",
          salary: 550000,
          role: "role 2"
        },
        {
          id: 5,
          employeeName: "employee 5",
          salary: 550000,
          role: "role 6"
        }
      ],
      filterEmployeeByRole: []
    };
    const action = {
      type: "FILTER_EMPLOYEES",
      payload: { role: "role 1" }
    };
    const updatedState = employeeReducer(initialState, action);
    expect(updatedState).toEqual({
      employee: [
        {
          id: 1,
          employeeName: "employee 1",
          salary: 55000,
          role: "role 1"
        },
        {
          id: 2,
          employeeName: "employee  2",
          salary: 550000,
          role: "role 2"
        },
        {
          id: 3,
          employeeName: "employee 3",
          salary: 55000,
          role: "role 1"
        },
        {
          id: 4,
          employeeName: "employee 4",
          salary: 550000,
          role: "role 2"
        },
        {
          id: 5,
          employeeName: "employee 5",
          salary: 550000,
          role: "role 6"
        }
      ],
      filterEmployeeByRole: [
        {
          id: 1,
          employeeName: "employee 1",
          salary: 55000,
          role: "role 1"
        },
        {
          id: 3,
          employeeName: "employee 3",
          salary: 55000,
          role: "role 1"
        }
      ]
    });
  });
});
