import request from '@/utils/request'

const api_name = '/eduservice/edu-teacher'

export default {
    // 讲师带条件分页查询
    // current 当前页， limit，每页展示数目， teacherQuery 查询条件
    getTeacherListPage(current, limit, teacherQuery){
        return request({
            // url: '/vue-admin-template/table/list'+current+"/"+limit,
            url: '/eduservice/edu-teacher/pageTeacherCondition/'+current+"/"+limit,
            method: 'post',
            // 条件查询 后端使用requestbody获取数据
            // dada: 把数据转为json数据格式进行传输
            data: teacherQuery
          })
    },
    //删除讲师
    deleteTeacherId(id) {
        return request({
            url: '${api_name}/${id}',
            method: 'delete'
          })
    },
    //添加讲师
    addTeacher(teacher) {
        return request({
            url: '${api_name}/addTeacher',
            method: 'post',
            data: teacher
          })
    },
    //根据id查询讲师
    getTeacherInfo(id) {
        return request({
            url: '${api_name}/getTeacher/${id}',
            method: 'get'
          })
    },
  //修改讲师
    updateTeacherInfo(teacher) {
        return request({
            url: '${api_name}/updateTeacher',
            method: 'post',
            data: teacher
          })
    }
}
