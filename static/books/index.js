import search from '../../README.MD'
import config from '~env/config'

const typeRelation = config.blogType.reduce((res, k) => {
  return { ...res, [k.type]: k.name }
}, {})

const files = require.context('./', true, /\.(MD|md)$/)

const fetchFilesInfo = (files, filesInfo = []) => {
  filesInfo.push({
    chapterId: '0',
    // createTime: '9999999999999',
    RelaType: 'INFO',
    typeName: '说明',
    chapterName: '维护日志',
    chapterContent: { default: search },
  })

  files.keys().forEach((file) => {
    const fileInfoArr = file.match(/\.\/mdBooks\/(\S*)\.(md|MD)/)[1].split('-')

    filesInfo.push({
      chapterId: fileInfoArr[0],
      // createTime: fileInfoArr[1],
      RelaType: fileInfoArr[1],
      typeName: typeRelation[fileInfoArr[1]],
      chapterName: fileInfoArr[2],
      chapterContent: files(file),
    })
  })

  return filesInfo
}

export default Utils_Array.compose(Utils_Array.sortByFiled, Utils_Array.addActiveFirst)(fetchFilesInfo(files), 'chapterId')
