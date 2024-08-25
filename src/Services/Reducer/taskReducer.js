const initialState = {
  tasks: [],
  task: null,
  isSubmit: false,
  loading: false,
  error: null,
  isSignUp: false,
  user: null,
  isLogin: false,
};

function taskReducer(state = initialState, action) {
  switch (action.type) {

    case 'SIGNUP_SUC':
      return {
        ...state,
        isSignUp: true,
        user: action.payload,
        error: null
      };

      case 'SIGNOUT':
        return {
          ...state,
          isLogin: false,
          isSignUp: false,
          user: null,
        };

    case 'LOGIN_SUC':
      return {
        ...state,
        isLogin: true,
        user: action.payload,
        error: null,
      };

    case 'GOOGLE_LOGIN_SUC':
      return {
        ...state,
        isLogin: true,
        user: action.payload,
        error: null
      }

    case 'ADD_TASK_SUC':
      return {
        ...state,
        tasks: action.payload,
        isSubmit: true,
        loading: true,
        error: null

      };
    case 'VIEW_TASK_SUC':
      return {
        ...state,
        tasks: action.payload,
        isSubmit: false,
        error: null
      };

    case 'SINGLE_TASK_SUC':
      return {
        ...state,
        task: action.payload,
        error: null,
      };

    case 'UPDATE_TASK_SUC':
      return {
        ...state,
        tasks: action.payload,
        task: null,
        isSubmit: true,
        loading: false,
        error: null,
      }

    case "DELETE_TASK_SUC":
      return {
        tasks: state.tasks.filter(task => task.id !== action.payload),
        task: null,
        isSubmit: false,
        error: null
      }

    default:
      return state;
  }
}

export default taskReducer;
