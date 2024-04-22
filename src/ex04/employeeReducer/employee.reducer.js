export const initialState = {
    employee: [],
    filterEmployeeByRole: []
  };

  function employeeReducer(state = initialState, { type, payload }) {
    switch (type) {
      case "ADD_EMPLOYEE": {
        const newEmployee = {
          id: payload.useId,
          employeeName: payload.employeeName,
          salary: payload.salary,
          role: payload.role
        };
        return {
          ...state,
          employee: [...state.employee, newEmployee]
        };
      }
      case "UPDATE_SALARY": {
        const updateSalary = state.employee.map((employee) =>
          employee.id === payload.id
            ? {
                ...employee,
                salary: employee.salary + payload.updatedSalary
              }
            : { ...employee }
        );
        return {
          ...state,
          employee: updateSalary
        };
      }
      case "REMOVE_EMPLOYEE": {
        const removedEmployee = state.employee.filter(
          (employee) => employee.id !== payload.id
        );
        return {
          ...state,
          employee: removedEmployee
        };
      }
      case "FILTER_EMPLOYEES": {
        const filterByRole = state.employee.filter((employee) =>
          employee.role.toLowerCase().includes(payload.role.toLowerCase())
        );
        return {
          ...state,
          filterEmployeeByRole: filterByRole
        };
      }
      default:
        return state;
    }
  }

  export default employeeReducer;
