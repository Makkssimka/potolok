<template>
    <div class="preloader-wrapper" :class="{ 'invisible': isInvisible }">
        <div class="preloader-container">
            <div class="green-block"></div>
            <div class="orange-block"></div>
            <div class="blue-block"></div>
            <div class="red-block"></div>
            <div class="text-wrapper">
                <p>ПРОФСЕРВИС<span>.su</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            isInvisible: false
        }
    },
    mounted: function(){
        setTimeout(()=>{
            this.isInvisible = true;
        }, 2900);
    }
    
}
</script>