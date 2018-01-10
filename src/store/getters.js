export default {
  screenHeight: state => state.screenHeight,
  screenWidth: state => state.screenWidth,
  isMobileDev: state => state.isMobileDev,
  isPcDev: state => !state.isMobileDev,
  userName: state => state.userName,
  isLogin: state => state.isLogin,
  tokenStr: state => state.tokenStr,
  weekOptions: state => state.weekOptions,
  path: state => state.path,
  tasks: state => state.tasks,
  taskTotal: state => state.taskTotal,
  taskPageIndex: state => state.taskPageIndex,
  runningTask: state => state.runningTask,
  isTaskRefresh: state => state.isTaskRefresh,
  TaskRefreshTimer: state => state.TaskRefreshTimer,
  isDevCommBusy:state=>state.isDevCommBusy
}
