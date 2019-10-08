<template>
    <moving-object
        class="moving-object"
        :leftPosition="getLeft"
        :topPosition="getTop"
    ></moving-object>
</template>


<script>
import { mapState, mapActions } from 'vuex';
import MovingObject from '../../views/moving-object/MovingObject'

const MOVING_AREA_WIDTH = window.innerWidth/2;
const MOVING_AREA_HEIGHT = window.innerHeight;
const MOVING_DELTA = 40;
const RIGHT_BORDER_DELTA =  MOVING_AREA_WIDTH - 82;
const BOTTOM_BORDER_DELTA = MOVING_AREA_HEIGHT - 80;

export default {
    name: "scene",
    components: {
        'moving-object': MovingObject
    },
    data() {
        return {
            movingObjectPosition: {
                left: 240,
                top: 240
            }
        }
    },
    computed: {
        ...mapState(
            ['currentDirection','isMovingRequested', 'disabledDirections']
        ),
        getLeft() {
             if(this.isMovingRequested) {
                 let newLeft = this.movingObjectPosition.left;
                 if(this.currentDirection === 'left') {
                     newLeft = this.movingObjectPosition.left - MOVING_DELTA > 0 ?
                         this.movingObjectPosition.left - MOVING_DELTA :
                         0;
                    this.setDisabledDirections({
                        left: this.isLeftOrUpDirectionDisabled(newLeft),
                        right: false
                    });
                 }
                 if(this.currentDirection === 'right') {
                     newLeft = this.movingObjectPosition.left + MOVING_DELTA < RIGHT_BORDER_DELTA ?
                         this.movingObjectPosition.left + MOVING_DELTA :
                         RIGHT_BORDER_DELTA;
                     this.setDisabledDirections({
                        right: this.isRightDirectionDisabled(newLeft),
                        left: false
                    });
                 }
                 this.movingObjectPosition.left = newLeft;
             }
            return this.movingObjectPosition.left;
        },
        getTop() {
            if(this.isMovingRequested) {
                let newTop = this.movingObjectPosition.top;
                if(this.currentDirection === 'up') {
                    newTop = this.movingObjectPosition.top - MOVING_DELTA > 0 ?
                        this.movingObjectPosition.top - MOVING_DELTA :
                        0;
                    this.setDisabledDirections({
                        up: this.isLeftOrUpDirectionDisabled(newTop),
                        down: false
                    });
                }
                if(this.currentDirection === 'down') {
                    newTop = this.movingObjectPosition.top + MOVING_DELTA < BOTTOM_BORDER_DELTA ?
                        this.movingObjectPosition.top + MOVING_DELTA :
                        BOTTOM_BORDER_DELTA;
                    this.setDisabledDirections({
                        down: this.isDownDirectionDisabled(newTop),
                        up: false
                    });
                }
                this.movingObjectPosition.top = newTop;
            }
            return this.movingObjectPosition.top;
        }
    }, 
    methods: {
        ...mapActions(['setDisabledDirections']),
        isLeftOrUpDirectionDisabled(newDirection) {
            return newDirection === 0 ? true : false;
        },
        isRightDirectionDisabled(newRight) {
            return newRight === RIGHT_BORDER_DELTA ? true : false;
        },
        isDownDirectionDisabled(newDown) {
            return newDown === BOTTOM_BORDER_DELTA ? true : false;
        }
    }
}
</script>
