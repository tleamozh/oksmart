  /* 
        匀速运动  
        @params {Object} ele 表示移动的元素
        @params {Number}  step 表示移动的步长 
        @params {Number}  target 表示移动的终点 
        @params {String}  attr 表示想改变的样式 
        */

        function animateYs(ele, step, target, attr) {
            clearInterval(ele.timer)
            // 开启一个定时器 赋值给元素的timer
            ele.timer = setInterval(() => {
                // 获取初始位置  
                var begin = parseInt(getStyle(ele, attr))

                // 计算移动的位置  
                var res = begin + step

                // 判断停止的位置  
                if (step > 0 && res >= target) {
                    res = target
                    clearInterval(ele.timer)
                } else if (step < 0 && res <= target) {
                    res = target
                    clearInterval(ele.timer)
                }

                // 给元素样式赋值  
                ele.style[attr] = res + 'px'


            }, 30)

        }
 /* 
  缓冲运动  
  @params {Object} ele 表示移动的元素
  @params {Number}  target 表示移动的终点 
  @params {String}  attr 表示想改变的样式 
  @params {Function}  callback 表示在代码执行的过程中回调函数 
  */

  function animateHc(ele, target, attr, callback) {
    clearInterval(ele.timer)
    ele.timer = setInterval(() => {
        // 获取初始位置  
        var begin = parseInt(getStyle(ele, attr))
        // 计算步长 
        var step = (target - begin) / 10
        // 步长取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        // 计算移动位置
        var res = begin + step
        // 给元素的样式赋值
        ele.style[attr] = res + 'px'
        // 判断是否到达目标值 关闭定时器 或者执行回调函数
        if (res == target) {
            clearTimeout(ele.timer)
            // callback()
            // if(callback){
            //     callback()
            // }
            callback && callback()
        }

    }, 30)
}

        function getStyle(ele, attr) {
            // getComputedStyle  获取非行内样式  
            // 获取生效的样式  
            // 获取长度样式的时候 带着px
            if (window.getComputedStyle) {
                return getComputedStyle(ele, null)[attr]
            } else {
                return ele.currentStyle[attr]
            }
        }