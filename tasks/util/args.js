import yargs from 'yargs'

const args = yargs

.option('production', {   //工程构建命令行选项
  boolean:true,
  default:false,
  describe:'min all scripts'
})

.option('watch', {   //文件修改监视构建命令行选项
  boolean:true,
  default:false,
  describe:'watch all files'
})

.option('verbose', {   //打印日志命令行选项
  boolean:true,
  default:false,
  describe:'log'
})

.option('sourcemaps', {   //生成sourcemaps命令行选项
  boolean:true,
  default:false,
  describe:'force the creation of sourcemaps'
})

.option('port', {   //服务器端口命令行选项
  string:true,
  default:false,
  describe:'server port'
})

.argv

export default args;
