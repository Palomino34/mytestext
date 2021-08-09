/**
 * Outputs.
 */
//% groups='["other", "Colors"]'
//% color="#FF00ff" weight=97 icon="\uf205"
namespace mytestext {
	/**
    * Turns on or off the mytestext
    */
    //% blockId=mytestext_set block="set mytestext to %on=toggleHighLow"
    //% weight=89
    //% blockGap=8
    export function setmytestext(on: boolean) {
        //__setmytestext(on);
    }

    /**
    * Turns off the mytestext
    */
    //% blockId=mytestext_set_off block="mytestext off"
    //% weight=89
    export function off() {
        //__setmytestext(false);
    }

	/**
    * Turns on the mytestext
    */
    //% blockId=mytestext_set_on block="mytestext on"
    //% weight=89
    export function on() {
        //__setmytestext(true);
    }

    function update() {

    }

}
