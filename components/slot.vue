<template>
  <div>
    <p>header</p>
    <slot name="header"
          a=1
          b=2
          c=3></slot>
    <p>content</p>
    <slot name="content"></slot>
    <p>footer</p>
    <slot name="footer"></slot>
  </div>
</template>
