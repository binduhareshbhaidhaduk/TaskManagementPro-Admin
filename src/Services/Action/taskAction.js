import { getDocs, collection, setDoc, doc, getDoc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { auth, db, provider } from '../../firebase';
import generateUniqueId from 'generate-unique-id';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const signUpSuc = (user) => {
  return {
    type: 'SIGNUP_SUC',
    payload: user
  }
}

export const loginSuc = (user) => ({
  type: 'LOGIN_SUC',
  payload: user,
});

export const SignOutSuc=()=>{
  return {
    type:'SIGNOUT',
  }
}

export const googleLogInSuc = (user) => {
  return {
    type: 'GOOGLE_LOGIN_SUC',
    payload: user
  }
}

export const addTaskSuc = () => ({
  type: 'ADD_TASK_SUC',

});

export const viewTaskSuc = (tasks) => ({
  type: 'VIEW_TASK_SUC',
  payload: tasks,
});

export const singleTaskSuc = (task) => {
  return {
    type: 'SINGLE_TASK_SUC',
    payload: task
  };
};

export const updateSuc = (task) => {
  return {
    type: 'UPDATE_TASK_SUC',
    payload: task
  }
}

export const deleteTaskSuc = (id) => {
  return {
    type: 'DELETE_TASK_SUC',
    payload: id
  }
}

export const addTask = (tasks) => {
  tasks.id = generateUniqueId({
    length: 4,
    useLetters: false,
  });
  return async (dispatch) => {
    try {
      //   const docRef = await addDoc(collection(db, 'tasks'), tasks);
      //   dispatch(addTaskSuc({ ...tasks, id: docRef.id }));
      //   console.log('Document written with ID: ', docRef.id);
      await setDoc(doc(db, "tasks", `${tasks.id}`), tasks);
      dispatch(addTaskSuc(tasks));
    } catch (e) {
      console.error('Error in addTask: ', e);
    }
  };
};

export const readTasks = () => {
  return async (dispatch) => {
    try {
      const tasks = [];
      const querySnapshot = await getDocs(collection(db, 'tasks'));
      querySnapshot.forEach((doc) => {
        tasks.push({ id: doc.id, ...doc.data() });
      });
      dispatch(viewTaskSuc(tasks));
      console.log(tasks, 'tady');
    } catch (error) {
      console.error('Error in readTask: ', error);
    }
  };
};


export const singleTask = (id) => {
  return async (dispatch) => {

    const docRef = doc(db, "tasks", `${id}`);
    const docSnap = await getDoc(docRef);
    const task = docSnap.data();
    dispatch(singleTaskSuc(task))
    console.log(docSnap.data(), 'single')
    console.log(id, 'id')
  }
}

export const updateTask = (id, task) => {
  return async (dispatch) => {
    const docRef = doc(db, "tasks", id);
    await updateDoc(docRef, task);
    dispatch(readTasks());
  }
}
export const deleteTask = (id) => {
  return async (dispatch) => {
    const docRef = doc(db, "tasks", id);
    await deleteDoc(docRef);
    dispatch(deleteTaskSuc(id));
  }
}

export const signUp = (email, password) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(signUpSuc(user))
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, 'errorcode', errorMessage, 'err messsage')
      });

  }
}
export const SignOut =()=>{
  return (dispatch) => {
    signOut(auth)
    .then(() => {
      dispatch(SignOutSuc())
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, 'errorcode', errorMessage, 'err messsage')
        });
      }
}

export const Login = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(loginSuc(user)); // Dispatch success action
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Login failed:', errorCode, errorMessage);
      });
  };
};


export const googleLogIn = () => {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
        const user = result.user;
        dispatch(googleLogInSuc(user))
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, 'errorcode', errorMessage, 'err messsage')
      });
  }
}


export const sendMessage = (taskId, message) => async (dispatch) => {
  try {
    await addDoc(collection(db, 'messages'), {
      taskId,
      message,
    });
    // You can dispatch an action to update the state if needed
    console.log('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

export const addContactMessage = (formData) => async (dispatch) => {
  try {
    await addDoc(collection(db, 'contactMessages'), {
      email: formData.email,
      name: formData.name,
      message: formData.message,
      timestamp: new Date(),
    });
    dispatch({ type: 'CONTACT_MESSAGE_SUCCESS' });
  } catch (error) {
    console.error('Error submitting contact message:', error);
    dispatch({ type: 'CONTACT_MESSAGE_ERROR', payload: error });
  }
};