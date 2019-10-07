<template>
    <div
        class="moving-object"
        :style="{'left': leftPosition+'px', 'top': topPosition+'px'}"
    ></div>
</template>


<script>
export default {
    name: "moving-object",
    props: {
        leftPosition: {
            type: Number,
            require: true
        },
        topPosition: {
            type: Number,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
$size: 80px;
.moving-object {
    width: $size;
    height: $size;
    background-color: #ff6373;
    position: absolute;
    transition: all .3s ease-in-out;
    border: 4px solid #ff495c;
}

</style>