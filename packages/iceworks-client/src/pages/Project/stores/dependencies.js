import socket from '@src/socket';

export default {
  dataSource: [],
  inited: false,
  async refresh(projectPath) {
    if (this.inited) {
      return;
    }

    try {
      const dataSource = await socket.emit('project.dependency.list', {
        projectPath,
      });
      this.dataSource = dataSource;
    } catch (error) {
      // do something...
    }
  },
};
