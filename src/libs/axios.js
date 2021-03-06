import axios from 'axios'
// import store from '@/store'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const addErrorLog = errorInfo => {
    const {
        statusText,
        status,
        request: {
            responseURL
        }
    } = errorInfo
    let info = {
            type: 'ajax',
            code: status,
            mes: statusText,
            url: responseURL
        }
        // if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
}

class HttpRequest {
    constructor(baseUrl = baseURL) {
        this.baseUrl = baseUrl
        this.queue = {}
    }
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }
        return config
    }
    destroy(url) {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) {
            // Spin.hide()
        }
    }
    interceptors(instance, url) {
        // 请求拦截
        instance.interceptors.request.use(config => {
                // 添加全局的loading...
                if (!Object.keys(this.queue).length) {
                    // Spin.show() // 不建议开启，因为界面不友好
                }
                this.queue[url] = true
                return config
            }, error => {
                return Promise.reject(error)
            })
            // 响应拦截
        instance.interceptors.response.use(res => {
            this.destroy(url)
            const {
                data,
                status
            } = res
            return {
                data,
                status
            }
        }, error => {
            this.destroy(url)
            let errorInfo = error.response
            if (!errorInfo) {
                const {
                    request: {
                        statusText,
                        status
                    },
                    config
                } = JSON.parse(JSON.stringify(error))
                errorInfo = {
                    statusText,
                    status,
                    request: {
                        responseURL: config.url
                    }
                }
            }
            addErrorLog(errorInfo)
            return Promise.reject(error)
        })
    }
    request(options) {
        axios.defaults.transformRequest = [
            function(data, config) {
                if (!config['Content-Type']) {
                    let ret = '';
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                    }
                    return ret;
                }
                switch (config['Content-Type'].toLowerCase()) {
                    case 'application/json':
                        {
                            return JSON.stringify(data);
                        }
                    case 'multipart/form-data':
                        {
                            return data;
                        }
                    default:
                        {
                            let ret = '';
                            for (let it in data) {
                                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                            }
                            return ret;
                        }
                }
            }
        ];
        const instance = axios.create({
            baseURL: this.baseUrl
        })
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}
export default HttpRequest