import { mockAnimationsApi } from 'jsdom-testing-mocks';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import GlitchedElement from '../src/lib/GlitchedElement.vue';
import { PowerGlitchOptions, RecursivePartial } from 'powerglitch';
import { GlitchedElementRef } from '../src/lib';


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
    } as any);
};

describe('Glitch', () => {
    it('be exported', async () => {
        expect(GlitchedElement).toBeTruthy();
    });

    it('default glitched element layout is block', async () => {
        const wrapper = mountGlitchElement(GLITCHED_DIV, { }, false);
        expect(getComputedStyle(wrapper.find('div').element).display).toBe('block');
    });

    it('can be glitched as an inline-block', async () => {
        const wrapper = mountGlitchElement(GLITCHED_DIV, { }, true);
        expect(getComputedStyle(wrapper.find('div').element).display).toBe('inline-block');
    });

    it('glitched element (slot) is cloned the expected number of times based on options', async () => {
        const wrapper = mountGlitchElement(GLITCHED_DIV, { slice: { count: 3 } }, false);
        // Original element (1) + Cloned elements (3) = Total elements (4)
        expect(wrapper.findAll('.glitched-element').length).toBe(4);
    });
});

describe('createContainers option', () => {
    it('createContainers option is force-set to false', async () => {
        const wrapper = mountGlitchElement(GLITCHED_DIV, { createContainers: true }, false);
        // If createContainers is passed as-is (true), the glitched element would be burried inside two more divs (div > div > div > div > .glitched-element)
        expect(wrapper.findAll('div > div > .glitched-element').length).toBeGreaterThanOrEqual(1);
    });
});

describe('Glitch controls', () => {
    it('default glitch controls do not return an error', async () => {
        const wrapper = mountGlitchElement(GLITCHED_DIV, { }, false);
        wrapper.vm.startGlitch();
        wrapper.vm.startGlitch();
        wrapper.vm.stopGlitch();
        wrapper.vm.stopGlitch();
    });

    it('returned glitch controls can always be called without errors', async () => {
        const wrapper = mount({
            components: { GlitchedElement },
            template: `
            <div>
                <GlitchedElement ref="glitched" :options="{timing:{easing:'ease-in-out'}}">
                    Glitched
                </GlitchedElement>
            </div>
            `,
        });
        expect(wrapper.vm.$refs.glitched).toBeTruthy();
        const glitched = wrapper.vm.$refs.glitched as GlitchedElementRef;
        glitched.startGlitch();
        glitched.startGlitch();
        glitched.stopGlitch();
        glitched.stopGlitch();
    });
});
