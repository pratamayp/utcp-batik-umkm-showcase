<script setup lang="ts">
import type { CheckboxRootProps } from "reka-ui";
import { type HTMLAttributes, computed } from "vue";
import { Check } from "lucide-vue-next";
import { CheckboxIndicator, CheckboxRoot, useForwardProps } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
  CheckboxRootProps & { class?: HTMLAttributes["class"] }
>();

const checked = defineModel<boolean | "indeterminate">("checked");

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <CheckboxRoot
    v-slot="slotProps"
    v-bind="forwarded"
    v-model="checked"
    data-slot="checkbox"
    :class="
      cn(
        'peer border-stone-300 data-[state=checked]:bg-amber-700 data-[state=checked]:text-white data-[state=checked]:border-amber-700 focus-visible:border-amber-600 focus-visible:ring-amber-600/20 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-none border shadow-none transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  >
    <CheckboxIndicator
      data-slot="checkbox-indicator"
      class="grid place-content-center text-current transition-none"
    >
      <slot v-bind="slotProps">
        <Check class="size-3.5" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
