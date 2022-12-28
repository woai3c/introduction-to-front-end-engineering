<template>
    <div class="wwads-cn wwads-vertical wwads-sticky" data-id="204" style="max-width:180px"></div>
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
        }
    }
}
</script>