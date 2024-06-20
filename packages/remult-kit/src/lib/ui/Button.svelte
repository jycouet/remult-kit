<script lang="ts">
  import type { Action } from 'svelte/action'
  import { fly } from 'svelte/transition'

  import { remult } from 'remult'

  import { KitBaseEnum, tw } from '../'
  import Tooltip from './Tooltip.svelte'

  export let isLoading = false
  let className: string | undefined | null = undefined
  export { className as class }

  export let permission: KitBaseEnum[] | KitBaseEnum | undefined = undefined

  let permissionDisabled = false
  $: disabled = $$restProps.disabled || permissionDisabled || isLoading

  // let's trigger the annimation if it's more than 200ms
  let triggerAnnimation = false
  $: isLoading &&
    setTimeout(() => {
      if (isLoading) {
        triggerAnnimation = true
      }
    }, 200)

  let updates = (param: { permission: KitBaseEnum[] | KitBaseEnum | undefined }) => {
    if (param && param.permission) {
      permissionDisabled = !remult.isAllowed(
        Array.isArray(param.permission) ? param.permission.map((c) => c.id) : param.permission.id,
      )
      if (permissionDisabled) {
        disabledWhy = `Vous n'avez pas la permission: ${Array.isArray(param.permission) ? param.permission.map((c) => `"${c.caption}"`).join(' ou ') : `"${param.permission.caption}"`}`
      } else {
        disabledWhy = ''
      }
    } else {
      permissionDisabled = false
      disabledWhy = ''
    }
  }

  let disabledWhy = ''
  const isAllowed: Action<HTMLElement, { permission: KitBaseEnum[] | KitBaseEnum | undefined }> = (
    node,
    param,
  ) => {
    // the node has been mounted in the DOM
    updates(param)

    return {
      update(param) {
        // the value of `bar` has changed
        updates(param)
      },

      destroy() {
        // the node has been removed from the DOM
      },
    }
  }
</script>

<Tooltip text={disabledWhy}>
  <button
    use:isAllowed={{ permission }}
    on:click
    {...$$restProps}
    class={tw(['btn text-white', disabled ? '' : 'btn-primary', className])}
    {disabled}
  >
    <!-- btn-outline -->
    <slot />
    {#if triggerAnnimation && isLoading}
      <div in:fly={{ x: -20 }}>
        <span class="loading loading-spinner"></span>
      </div>
    {/if}
  </button>
</Tooltip>
