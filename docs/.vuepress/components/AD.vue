<template>
    <div id="ad-div" class="wwads-cn wwads-vertical wwads-sticky" data-id="204" style="max-width:180px"></div>
</template>

<script>
export default {
    mounted() {
        const adScript = document.querySelector('#ad-script')
        if (!adScript) {
            const script = document.createElement('script')
            script.id = 'ad-script'
            script.async = true
            script.src = 'https://cdn.wwads.cn/js/makemoney.js'
            document.head.appendChild(script)

            const styleText = `
                #ad-div {
                    z-index: 1000;
                    max-width: 154px;
                    position: fixed;
                    right: 10px;
                    bottom: 10px;
                    text-align: center
                }
            `

            const style = document.createElement('style')
            style.type = 'text/css'
            style.id = 'ad-style'
            style.textContent = styleText
            document.head.appendChild(style)
            
            const div = document.querySelector('#ad-div')

            let timer
            window.onresize = () => {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    if (window.innerWidth >= 1470) {
                        div.style.display = 'block'
                        console.log('show')
                    } else {
                        div.style.display = 'none'
                        console.log('hidden')
                    }
                }, 500);
            }
        }
    }
}
</script>