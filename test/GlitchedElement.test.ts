import { mockAnimationsApi } from 'jsdom-testing-mocks';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import GlitchedElement from '../src/lib/GlitchedElement.vue';
import { PowerGlitchOptions, RecursivePartial } from 'powerglitch';


try {
    mockAnimationsApi();
} catch (error) {
    console.warn('Unable to mock Web Animation API');
}

const BASE_OPTIONS: RecursivePartial<PowerGlitchOptions> = {
    timing: {
        easing: 'ease-in-out',
    },
};

const GLITCHED_DIV = '<div class="glitched-element">PowerGlitch</div>';

const mountGlitchElement = (slot: string, options: RecursivePartial<PowerGlitchOptions>, inline: boolean) => {
    return mount(GlitchedElement, {
        slots: {
            default: slot
        },
        props: {
            options: {
                ...BASE_OPTIONS,
                ...options,
            },
            inline: !! inline,
        },
    });
};

describe('GlitchedElement', () => {
    it('be exported', async () => {
        expect(GlitchedElement).toBeTruthy();
    });

    it('can be glitched inline', async () => {
        const wrapper = mountGlitchElement(GLITCHED_DIV, { }, true);
        expect(getComputedStyle(wrapper.find('div').element).display).toBe('inline-block');
    });

    it('can be glitched inline', async () => {
        const wrapper = mountGlitchElement(GLITCHED_DIV, { }, false);
        expect(getComputedStyle(wrapper.find('div').element).display).toBe('block');
    });

    it('glitched element (slot) is duplicated the expected number of times based on options', async () => {
        const wrapper = mountGlitchElement(GLITCHED_DIV, { slice: { count: 3 } }, false);
        // Original element (1) + Cloned elements (3) = Total elements (4)
        expect(wrapper.findAll('.glitched-element').length).toBe(4);
    });

    it('createContainers option is force-set to false', async () => {
        const wrapper = mountGlitchElement(GLITCHED_DIV, { createContainers: true }, false);
        // If createContainers is passed as-is (true), the glitched element would be burried inside two more divs (div > div > div > div > .glitched-element)
        expect(wrapper.findAll('div > div > .glitched-element').length).toBeGreaterThanOrEqual(1);
    });

    it('glitch controls are returned and can always be called without errors', async () => {
        const wrapper = mountGlitchElement(GLITCHED_DIV, { }, false);
        expect(wrapper.vm.startGlitch()).toBeUndefined();
        expect(wrapper.vm.startGlitch()).toBeUndefined();
        expect(wrapper.vm.stopGlitch()).toBeUndefined();
        expect(wrapper.vm.stopGlitch()).toBeUndefined();
    });
});
