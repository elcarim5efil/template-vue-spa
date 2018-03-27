module.exports = {
  prompts: {
    projectName: {
      message: `What's the name of the new project?`,
      default: ':folderName:'
    },
    description: {
      message: `How would you descripe the new project?`,
      default: 'A awsome kaola project',
    },
    owner: {
      message: `Who's the owner of the project?`,
      default: 'kaola-fed'
    }
  },
  move: {
    gitignore: '.gitignore'
  },
  gitInit: true,
  installDependencies: true
};