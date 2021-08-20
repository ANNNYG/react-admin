import React, { useEffect } from 'react'
/* 代码拆分插件 */
import Loadable from 'react-loadable'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const useLoadingComponent = () => {
    useEffect(() => {
        NProgress.start()
        return () => {
            NProgress.done()
        }
    }, [])

    return <div />
}

export default (loader, loading = useLoadingComponent) => {
    return Loadable({
        loader,
        loading
    })
}
