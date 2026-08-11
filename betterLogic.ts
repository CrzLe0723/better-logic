namespace logic {


    //--- Variables ---
    let lastStates: boolean[] = []
    let toggleStates: boolean[] = []
    let prevStates: boolean[] = []
    let latchStates: boolean[] = []
    let holdStates: boolean[] = []
    let delayTimers: number[] = []
    let cooldowns: number[] = []
    let lockStates: boolean[] = []
    let windowTimers: number[] = []
    let stableStates: boolean[] = []
    let stableTimers: number[] = []
    let memoryStates: boolean[] = []
    let prevArray: boolean[] = []
    // ---CORE LOGIC---


    /**
     * XOR gate
     * True when inputs are different.
     */
    //% block="XOR $a $b"
    //% group="Core Logic"
    //% weight=85
    export function xor(a: boolean, b: boolean): boolean {
        return a != b
    }
    /**
     * AND gate
     * Runs code if both specified conditions is true
     * @a first boolean condition
     * @b second boolean condition
     */
    //% block="$a AND $b"
    //% group="Core Logic"
    //% weight=100
    export function and(a: boolean, b: boolean): boolean {
        return a && b
    }

    /**
     * OR gate
     * Runs code if either of two specified conditions is true
     */
    //% block="$a OR $b"
    //% group="Core Logic"
    //% weight=95
    export function or(a: boolean, b: boolean): boolean {
        return a || b
    }

    /**
     * NOT gate
     * Inverts a boolean value true -> false | false -> true
     */
    //% block="NOT $a"
    //% group="Core Logic"
    //% weight=90
    export function not(a: boolean): boolean {
        return !a
    }


    // ---DERIVED LOGIC---


    /**
     * NAND gate
     * False only when both inputs are true.
     */
    //% block="NAND $a $b"
    //% group="Derived Logic"
    export function nand(a: boolean, b: boolean): boolean {
        return !(a && b)
    }

    /**
     * NOR gate
     * True only when both inputs are false.
     */
    //% block="NOR $a $b"
    //% group="Derived Logic"
    export function nor(a: boolean, b: boolean): boolean {
        return !(a || b)
    }

    /**
     * XNOR gate
     * True when inputs are the same.
     */
    //% block="XNOR $a $b"
    //% group="Derived Logic"
    export function xnor(a: boolean, b: boolean): boolean {
        return a === b
    }

    /**
     * IMPLIES gate
     * False only when A is true and B is false.
     */
    //% block="IMPLIES $a $b"
    //% group="Derived Logic"
    export function implies(a: boolean, b: boolean): boolean {
        return !a || b
    }

    /**
     * AND NOT gate
     * True when A is true and B is false.
     */
    //% block="$a AND NOT $b"
    //% group="Derived Logic"
    export function andNot(a: boolean, b: boolean): boolean {
        return a && !b
    }

    /**
     * OR NOT gate
     * True when A is true OR B is false.
     */
    //% block="$a OR NOT $b"
    //% group="Derived Logic"
    export function orNot(a: boolean, b: boolean): boolean {
        return a || !b
    }


    // ---COMPARISON LOGIC---


    /**
     * EQUALS gate
     * True when both inputs are the same.
     */
    //% block="$a EQUALS $b"
    //% group="Comparison Logic"
    export function equals(a: boolean, b: boolean): boolean {
        return a === b
    }

    /**
     * MATCH gate
     * True when both inputs are the same.
     */
    //% block="$a MATCH $b"
    //% group="Comparison Logic"
    export function match(a: boolean, b: boolean): boolean {
        return a === b
    }

    /**
     * DIFFERENT gate
     * True when inputs are different.
     */
    //% block="$a DIFFERENT $b"
    //% group="Comparison Logic"
    export function different(a: boolean, b: boolean): boolean {
        return a !== b
    }


    // ---UTILITY LOGIC---


    /**
     * BUFFER gate
     * Passes value through unchanged.
     */
    //% block="BUFFER $a"
    //% group="Utility Logic"
    export function buffer(a: boolean): boolean {
        return a
    }

    /**
     * TOGGLE gate
     * Flips a boolean value.
     */
    //% block="TOGGLE $a"
    //% group="Utility Logic"
    export function toggle(a: boolean): boolean {
        return !a
    }

    /**
    * RESET ALL MEMORY
    */
    //% block="RESET LOGIC MEMORY"
    //% group="Utility Logic"
    export function resetLogic() {
        lastStates = []
        toggleStates = []
        prevStates = []
        latchStates = []
        holdStates = []
        delayTimers = []
        cooldowns = []
        lockStates = []
        windowTimers = []
        stableStates = []
        stableTimers = []
    }
    /**
    * RESET MEMORY WHEN TRUE
    */
    //% block="RESET MEMORY IF $a"
    //% group="Utility Logic"
    export function resetIf(a: boolean) {
        if (a) {
            lastStates = []
            toggleStates = []
            prevStates = []
            latchStates = []
            holdStates = []
            delayTimers = []
            cooldowns = []
            lockStates = []
            windowTimers = []
            stableStates = []
            stableTimers = []
        }
    }
    // ---CONSTANTS---


    /**
     * TRUE constant
     * Always returns true.
     */
    //% block="TRUE"
    //% group="Constants"
    export function alwaysTrue(): boolean {
        return true
    }

    /**
     * FALSE constant
     * Always returns false.
     */
    //% block="FALSE"
    //% group="Constants"
    export function alwaysFalse(): boolean {
        return false
    }


    // ---MULTI INPUT LOGIC---


    /**
     * ONE TRUE gate
     * True when exactly one input is true.
     */
    //% block="ONE TRUE $a $b"
    //% group="Multi Logic"
    export function oneTrue(a: boolean, b: boolean): boolean {
        return (a && !b) || (!a && b)
    }

    /**
     * BOTH FALSE gate
     * True when both inputs are false.
     */
    //% block="BOTH FALSE $a $b"
    //% group="Multi Logic"
    export function bothFalse(a: boolean, b: boolean): boolean {
        return !a && !b
    }

    /**
     * ANY THREE gate
     * True when at least one input is true.
     */
    //% block="ANY $a $b $c"
    //% group="Multi Logic"
    export function any3(a: boolean, b: boolean, c: boolean): boolean {
        return a || b || c
    }

    /**
     * ALL THREE gate
     * True only when all inputs are true.
     */
    //% block="ALL $a $b $c"
    //% group="Multi Logic"
    export function all3(a: boolean, b: boolean, c: boolean): boolean {
        return a && b && c
    }

    /**
     * MAJORITY gate
     * True when at least two inputs are true.
     */
    //% block="MAJORITY $a $b $c"
    //% group="Multi Logic"
    export function majority(a: boolean, b: boolean, c: boolean): boolean {
        return (a && b) || (a && c) || (b && c)
    }

    /**
     * NONE TRUE gate
     * True only when all inputs are false.
     */
    //% block="NONE TRUE $a $b"
    //% group="Multi Logic"
    export function noneTrue(a: boolean, b: boolean): boolean {
        return !a && !b
    }
    /**
     * EXACTLY TWO TRUE
     * True only when exactly two inputs are true.
     */
    //% block="EXACTLY TWO $a $b $c"
    //% group="Multi Logic"
    export function exactlyTwo(a: boolean, b: boolean, c: boolean): boolean {
        return (a && b && !c) || (a && !b && c) || (!a && b && c)
    }
    /**
     * AT MOST ONE TRUE
     * True when zero or one inputs are true.
     */
    //% block="AT MOST ONE $a $b $c"
    //% group="Multi Logic"
    export function atMostOne(a: boolean, b: boolean, c: boolean): boolean {
        return !(a && b) && !(a && c) && !(b && c)
    }
    /**
     * ANY FALSE
     * True if at least one input is false.
     */
    //% block="ANY FALSE $a $b"
    //% group="Multi Logic"
    export function anyFalse(a: boolean, b: boolean): boolean {
        return !a || !b
    }



    //--- Game Logic ---
    /**
     * RISING EDGE
     * True only when value changes from false to true.
     * Each id tracks its own signal.
     */
    //% block="RISING EDGE id $id value $a"
    //% group="Game Logic"
    export function risingEdge(id: number, a: boolean): boolean {
        let prev = prevStates[id] || false
        let result = !prev && a
        prevStates[id] = a
        return result
    }
    /**
     * FALLING EDGE
     * True only when value changes from true to false.
     * Each id tracks its own signal.
     */
    //% block="FALLING EDGE id $id value $a"
    //% group="Game Logic"
    export function fallingEdge(id: number, a: boolean): boolean {
        let prev = lastStates[id] || false
        let result = prev && !a
        lastStates[id] = a
        return result
    }
    /**
    * FLIP FLOP
    * Toggles state on rising edge.
    */
    //% block="flip flop id $id trigger $a"
    //% group="Game Logic"
    export function flipFlop(id: number, a: boolean): boolean {
        let prev = lastStates[id] || false

        if (!prev && a) {
            toggleStates[id] = !toggleStates[id]
        }

        lastStates[id] = a
        return toggleStates[id] || false
    }
    /**
     * TOGGLE ON RISING EDGE
     * Flips stored state when input turns true.
     */


    //% block="TOGGLE MEMORY id $id trigger $a"
    //% group="Game Logic"
    export function toggleMemory(id: number, a: boolean): boolean {
        let prev = prevStates[id] || false
        let rising = !prev && a

        if (rising) {
            toggleStates[id] = !toggleStates[id]
        }

        prevStates[id] = a
        return toggleStates[id] || false
    }
    /**
     * LATCH
     * Sets true when set is true, resets when reset is true.
     */
    //% block="LATCH id $id set $set reset $reset"
    //% group="Game Logic"
    export function latch(id: number, set: boolean, reset: boolean): boolean {
        if (set) latchStates[id] = true
        if (reset) latchStates[id] = false
        return latchStates[id] || false
    }

    /**
     * HOLD
     * Remembers last true signal.
     */
    //% block="HOLD id $id value $a"
    //% group="Game Logic"
    export function hold(id: number, a: boolean): boolean {
        if (a) holdStates[id] = true
        return holdStates[id] || false
    }

    /**
     * PULSE
     * Outputs true for one frame when triggered.
     */
    //% block="PULSE id $id trigger $a"
    //% group="Game Logic"
    export function pulse(id: number, a: boolean): boolean {
        return risingEdge(id, a)
    }

    /**
     * SET MEMORY
     * Stores a value.
     */
    //% block="SET MEMORY id $id to $value"
    //% group="Game Logic"
    export function setMemory(id: number, value: boolean) {
        memoryStates[id] = value
    }

    /**
     * GET MEMORY
     * Returns stored value.
     */
    //% block="GET MEMORY id $id"
    //% group="Game Logic"
    export function getMemory(id: number): boolean {
        return memoryStates[id] || false
    }
    /**
     * DELAY
     * Outputs true after N ms when triggered.
     */
    //% block="DELAY id $id trigger $a ms $ms"
    //% group="Game Logic"
    //% ms.shadow=timePicker ms.defl= 500
    export function delay(id: number, a: boolean, ms: number): boolean {
        if (a && !delayTimers[id]) {
            delayTimers[id] = game.runtime() + ms
        }

        if (delayTimers[id] && game.runtime() >= delayTimers[id]) {
            delayTimers[id] = 0
            return true
        }

        return false
    }

    /**
     * COOLDOWN
     * Prevents repeated triggering for a duration.
     */
    //% block="COOLDOWN id $id trigger $a ms $ms"
    //% group="Game Logic"
    //% ms.shadow=timePicker ms.defl=500
    export function cooldown(id: number, a: boolean, ms: number): boolean {
        if (a && game.runtime() > (cooldowns[id] || 0)) {
            cooldowns[id] = game.runtime() + ms
            return true
        }
        return false
    }

    /**
     * STABLE
     * Only changes after value stays same for duration.
     */
    //% block="STABLE id $id value $a ms $ms"
    //% group="Game Logic"
    //% ms.shadow=timePicker ms.defl=500
    export function stable(id: number, a: boolean, ms: number): boolean {
        if (a !== stableStates[id]) {
            if (!stableTimers[id]) {
                stableTimers[id] = game.runtime() + ms
            }

            if (game.runtime() >= stableTimers[id]) {
                stableStates[id] = a
                stableTimers[id] = 0
            }
        } else {
            stableTimers[id] = 0
        }

        return stableStates[id] || false
    }

    /**
     * WINDOW
     * True for a duration after trigger.
     */
    //% block="WINDOW id $id trigger $a ms $ms"
    //% group="Game Logic"
    //% ms.shadow=timePicker ms.defl=500
    export function window(id: number, a: boolean, ms: number): boolean {
        if (a) {
            windowTimers[id] = game.runtime() + ms
        }

        return game.runtime() < (windowTimers[id] || 0)
    }
    /**
     * EDGE CHANGE
     * True when value changes (either direction).
     */
    //% block="EDGE CHANGE id $id value $a"
    //% group="Game Logic"
    export function edgeChange(id: number, a: boolean): boolean {
        let prev = lastStates[id] || false
        let changed = prev !== a
        lastStates[id] = a
        return changed
    }

    /**
     * LOCK
     * Triggers once, then stays off.
     */
    //% block="LOCK id $id trigger $a"
    //% group="Game Logic"
    export function lock(id: number, a: boolean): boolean {
        if (lockStates[id]) return false

        if (a) {
            lockStates[id] = true
            return true
        }

        return false
    }

    // ---Control Logic---
    /**
    * CONDITION
    * Runs an action if condition is true.
    */
    //% block="if $cond do"
    //% group="Control Logic"
    export function runIf(cond: boolean, handler: () => void) {
        if (cond) handler()
    }
    /**
     * ON TRUE EVENT
     * Runs only when condition is true.
     */
    //% block="when $cond is true do"
    //% group="Control Logic"
    export function whileTrue(cond: boolean, handler: () => void) {
        if (cond) handler()
    }
    /**
     * ON FALSE EVENT
     * Runs when condition is false.
     */
    //% block="when $cond is false do"
    //% group="Control Logic"
    export function whileFalse(cond: boolean, handler: () => void) {
        if (!cond) handler()
    }
    /**
     * ON CHANGE EVENT
     * Runs when value changes (true ↔ false).
     */
    //% block="when $a changes do"
    //% group="Control Logic"
    export function onChange(id: number, a: boolean, handler: () => void) {
        let prev = lastStates[id] || false

        if (prev !== a) {
            handler()
        }

        lastStates[id] = a
    }
    /**
     * ON RISING EVENT
     * Runs when signal goes false → true.
     */
    //% block="when $a rises id $id do"
    //% group="Control Logic"
    export function onRise(id: number, a: boolean, handler: () => void) {
        let prev = lastStates[id] || false

        if (!prev && a) {
            handler()
        }

        lastStates[id] = a
    }
    /**
     * ON FALLING EVENT
     * Runs when signal goes true → false.
     */
    //% block="when $a falls id $id do"
    //% group="Control Logic"
    export function onFall(id: number, a: boolean, handler: () => void) {
        let prev = lastStates[id] || false

        if (prev && !a) {
            handler()
        }

        lastStates[id] = a
    }
    /**
     * ON ANY EDGE EVENT
     * Runs on any change.
     */
    //% block="when $a edges id $id do"
    //% group="Control Logic"
    export function onEdge(id: number, a: boolean, handler: () => void) {
        let prev = lastStates[id] || false

        if (prev !== a) {
            handler()
        }

        lastStates[id] = a
    }
    /**
     * ON PULSE EVENT
     * Fires only once per trigger.
     */
    //% block="pulse $a id $id do"
    //% group="Control Logic"
    export function onPulse(id: number, a: boolean, handler: () => void) {
        if (risingEdge(id, a)) {
            handler()
        }
    }
    /**
     * WHEN STABLE EVENT
     * Runs when value stays same for time.
     */
    //% block="when $a stable id $id ms $ms do"
    //% group="Control Logic"
    //% ms.shadow=timePicker ms.defl=500
    export function onStable(id: number, a: boolean, ms: number, handler: () => void) {
        if (stable(id, a, ms)) {
            handler()
        }
    }
    /**
     * COOLDOWN EVENT
     * Runs but prevents spam triggers.
     */
    //% block="when $a cooldown id $id ms $ms do"
    //% group="Control Logic"
    //% ms.shadow=timePicker ms.defl=500
    export function onCooldown(id: number, a: boolean, ms: number, handler: () => void) {
        if (cooldown(id, a, ms)) {
            handler()
        }
    }
    /**
     * TOGGLE EVENT
     * Fires when toggle flips state.
     */
    //% block="when toggle $a id $id do"
    //% group="Control Logic"
    export function onToggle(id: number, a: boolean, handler: () => void) {
        if (flipFlop(id, a)) {
            handler()
        }
    }


    //---Array Blocks---
    /**
    * ALL TRUE (array)
    * True if all values are true.
    */
    //% block="ALL TRUE ARRAY"
    //% group="Array Logic"
    export function allArray(values: boolean[]): boolean {
        for (let v of values) {
            if (!v) return false
        }
        return true
    }

    /**
     * ALL FALSE (array)
     * True if all values are false.
     */
    //% block="ALL FALSE ARRAY"
    //% group="Array Logic"
    export function allFalseArray(values: boolean[]): boolean {
        for (let v of values) {
            if (v) return false
        }
        return true
    }
    /**
     * COUNT TRUE
     * Returns number of true values in array.
     */
    //% block="count true elements in array"
    //% group="Array Logic"
    export function countTrue(values: boolean[]): number {
        let count = 0
        for (let v of values) {
            if (v) count++
        }
        return count
    }
    /**
    * Returns number of false values in array.
    * @param values the boolean array to be checked
    */
    //% block="count false elements in array"
    //% group="Array Logic"
    export function countFalse(values: boolean[]): number {
        let count = 0
        for (let v of values) {
            if (!v) count++
        }
        return count
    }
    /**
     * True if at least %n values are true.
     * @param value the boolean array to be checked
     * @param n amount of elements an array needs, to be true
     */
    //% block="at least $n true in array"
    //% group="Array Logic"
    export function threshold(values: boolean[], n: number): boolean {
        let count = 0
        for (let v of values) {
            if (v) count++
            if (count >= n) return true
        }
        return false
    }
    /**
     * Flips all values in array.
     * @param the boolean array that's value will be flipped
     */
    //% block="flip all array elements"
    //% group="Array Logic"
    export function toggleAll(values: boolean[]): boolean[] {
        let out: boolean[] = []
        for (let v of values) {
            out.push(!v)
        }
        return out
    }

    /**
     * True if any value changed from last frame.
     * @param values the boolean values of a boolean array
     */
    //% block="array changed $values"
    //% group="Array Logic"
    export function arrayChanged(values: boolean[]): boolean {
        if (prevArray.length !== values.length) {
            prevArray = values.slice()
            return true
        }

        for (let i = 0; i < values.length; i++) {
            if (values[i] !== prevArray[i]) {
                prevArray = values.slice()
                return true
            }
        }

        return false
    }
    /**
    * True if at least one value is true.
    * @param values the boolean elements of a boolean array
    */
    //% block="ANY TRUE ARRAY"
    //% group="Array Logic"
    export function anyArray(values: boolean[]): boolean {
        for (let v of values) {
            if (v) return true
        }
        return false
    }
    /**
     * Returns false if any array inelement in a boolean array is true
     */
    //% block="none are true in array"
    //% group="Array Logic"
    export function noneArray(values: boolean[]): boolean {
        for (let v of values) {
            if (v) return false
        }
        return true
    }
}