import * as types from './mutation-types'

export default {
  [types.SET_WIDTH](state, width) {
    state.screenWidth = width;
    state.isMobileDev = state.screenWidth < 1024;
    // console.log("change:" + state.screenWidth)
  },
  [types.SET_HEIGHT](state, height) {
    state.screenHeight = height
  },
  [types.SET_USERNAME](state, userName) {
    state.userName = userName
  },
  [types.SET_ISLOGIN](state, login) {
    state.isLogin = login
    //console.log('state.isLogin = ' + state.isLogin)
  },
  [types.SET_TOKENSTR](state, token) {
    state.tokenStr = token
  },
  [types.SET_PATH](state, path) {
    state.path = path
  },
  [types.SET_TASKSTOTAL](state, total) {
    state.taskTotal = total
  },
  [types.SET_TASKSLIST](state, tasks) {
    state.tasks = tasks
  },
  [types.SET_TASKSPAGEINDEX](state, index) {
    state.taskPageIndex = index
  }, 
  [types.SET_PUSHTASKSLIST](state, task) {
    state.tasks.push(task)
  },
  [types.SET_TASKSTATUS](state, taskStatus) {
    for (let index = 0; index < state.tasks.length; index++) {
      if (taskStatus.Status == 'Running') {
        if (state.tasks[index].TaskID == taskStatus.TaskID) {
          state.tasks[index].Status = 'Running';
        } else {
          state.tasks[index].Status = 'Stop';
        }
      } else {
        if (state.tasks[index].TaskID == taskStatus.TaskID) {
          state.tasks[index].Status = 'Stop';
        }
      }
    }
  },
  [types.SET_ISTASKREFRESH](state, isRefresh) {
    state.isTaskRefresh = isRefresh;
  },
  [types.DEL_ONETASKFORBUFF](state, taskID) {
    for (let index = 0; index < state.tasks.length; index++) {
      if (state.tasks[index].TaskID === taskID) {
        state.tasks.splice(index, 1);
      }
    }
  },
  [types.SET_TASKREFTIMEER](state, timer) {
    state.TaskRefreshTimer = timer;
  },
  [types.SET_DEVCOMMBUSY](state, isBusy) {
    state.isDevCommBusy = isBusy;
  }
}
