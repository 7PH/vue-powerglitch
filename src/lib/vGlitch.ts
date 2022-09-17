import { Directive } from 'vue';
import { PowerGlitch, RecursivePartial, PowerGlitchOptions } from 'powerglitch';


/**
 * Custom directive to glitch any DOM element. Should not be used on components.
 * @remarks
 * This directive is NOT compatible with v-if. If you are using v-if and v-glitch on the same component, you will encounter issues.
 * Use GlitchedElement if you need to glitch an element which glitches.
 * @example
 * Use v-glitch on any DOM element (span, div, img, ..)
 * ```html
 * This will <span v-glitch>glitch</span>
 * ```
 * @example
 * NEVER use v-glitch on an element with v-if
 * ```html
 * <!-- Do NOT do this -->
 * This will NOT <span v-glitch v-if="...">glitch</span> correctly
 * ```
 */
export const vGlitch: Directive<HTMLElement, RecursivePartial<PowerGlitchOptions> | undefined> = {
    /**
     * The element will be glitched once mounted
     */
    mounted: (el, binding) => {
        PowerGlitch.glitch(el, binding.value);
    },
};
