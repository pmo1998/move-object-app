<template>
    <div class="keyboard">
        <div class="keyboard_container">
            <key-view
                keyType="up"
                @onKeyClick="onKeyClick"
                :isDisabled="disabledDirections.up"
            ></key-view>
        </div>
        <div class="keyboard_container">
            <key-view
                keyType="left"
                @onKeyClick="onKeyClick"
                :isDisabled="disabledDirections.left"
            ></key-view>
            <key-view
                keyType="down"
                @onKeyClick="onKeyClick"
                :isDisabled="disabledDirections.down"
            ></key-view>
            <key-view
                keyType="right"
                @onKeyClick="onKeyClick"
                :isDisabled="disabledDirections.right"
            ></key-view>
        </div>
    </div>
</template>

<script>
import KeyView from '../../views/key/Key'
import { mapState, mapActions } from 'vuex';
export default {
    name: 'keyboard',
    components: {
        'key-view': KeyView 
    },
    computed: {
        ...mapState(
            ['currentDirection','disabledDirections']
        )
    },
    methods: {
         ...mapActions(['setCurrentDirection', 'setMovingRequested']),
        onKeyClick(nextDirection) {
            this.setCurrentDirection({currentDirection: nextDirection});
            this.setMovingRequested({isMovingRequested: true});
        }
    }
}
</script>

<style lang="scss">
.keyboard_container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 75px;
    width: 225px;
    box-sizing: border-box;
}
</style>