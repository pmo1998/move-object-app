<template>
    <button
        :class="getClassByKeyType"
        @click="onKeyClick"
        :disabled="isDisabled"
    >
    </button>
</template>

<script>
export default {
    name: 'key-view',
    data() {
        return {
            type: this.keyType
        }
    },
    props: {
        keyType: {
            type: String,
            required: true
        },
        isDisabled: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        getClassByKeyType() {
            let className = '';
            if(this.keyType === 'left') {
                className = 'key-view_left'; 
            } else if (this.keyType === 'right') {
                className = 'key-view_right'
            } else if (this.keyType === 'down') {
                className = 'key-view_down'
            } else {
                 className = 'key-view_up'
            }
            return className;
        }
    }, 

    methods: {
        onKeyClick() {
            this.$emit('onKeyClick', this.keyType);
        }
    }
    
}
</script>

<style lang="scss" scoped>
$key_view_size: 70px;
$key_view_left: '\2190';
$key_view_right: '\2192';
$key_view_down: '\2193';
$key_view_up: '\2191';

.key-view {
    width: $key_view_size;
    height: $key_view_size;
    position: relative;
    border: 2px solid #086287;
    background-color: #2EB8F2;
    border-radius: 10px;
    transition: all ease 0.3s;
    box-sizing: border-box;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background-color: #12A0DB;
    }

    &:before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 30px;
    }

    &:disabled {
        background-color: #086287;
    }
}

.key-view_left {
    @extend .key-view;
    &:before {
        content: $key_view_left;
    }
}

.key-view_right {
    @extend .key-view;
    &:before {
        content: $key_view_right;
    }
}

.key-view_down {
    @extend .key-view;
    &:before {
        content: $key_view_down;
    }
}

.key-view_up {
    @extend .key-view;
    &:before {
        content: $key_view_up;
    }
}

</style>