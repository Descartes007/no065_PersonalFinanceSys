const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootm47gb/",
            name: "springbootm47gb",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootm47gb/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "个人理财系统"
        } 
    }
}
export default base
