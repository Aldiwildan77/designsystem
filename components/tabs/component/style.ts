import { css } from "styled-components";
const style = css`
@tab-prefix-cls: ~'-tabs';

.@{tab-prefix-cls} {
  .reset-component;

  display: flex;
  overflow: hidden;

  // ========================== Navigation ==========================
  > .@{tab-prefix-cls}-nav,
  > div > .@{tab-prefix-cls}-nav {
    position: relative;
    display: flex;
    flex: none;
    align-items: center;

    .@{tab-prefix-cls}-nav-wrap {
      position: relative;
      display: inline-block;
      display: flex;
      flex: auto;
      align-self: stretch;
      overflow: hidden;
      white-space: nowrap;
      transform: translate(0); // Fix chrome render bug

      // >>>>> Ping shadow
      &::before,
      &::after {
        position: absolute;
        z-index: 1;
        opacity: 0;
        transition: opacity @animation-duration-slow;
        content: '';
        pointer-events: none;
      }
    }

    .@{tab-prefix-cls}-nav-list {
      position: relative;
      display: flex;
      transition: transform @animation-duration-slow;
    }

    // >>>>>>>> Operations
    .@{tab-prefix-cls}-nav-operations {
      display: flex;
      align-self: stretch;

      &-hidden {
        position: absolute;
        visibility: hidden;
        pointer-events: none;
      }
    }

    .@{tab-prefix-cls}-nav-more {
      position: relative;
      padding: @tabs-card-horizontal-padding;
      background: transparent;
      border: 0;

      &::after {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 5px;
        transform: translateY(100%);
        content: '';
      }
    }

    .@{tab-prefix-cls}-nav-add {
      min-width: @tabs-card-height;
      padding: 0 @padding-xs;
      background: @tabs-card-head-background;
      border: @border-width-base @border-style-base @border-color-split;
      border-radius: @border-radius-base @border-radius-base 0 0;
      outline: none;
      cursor: pointer;
      transition: all @animation-duration-slow @ease-in-out;

      &:hover {
        color: @tabs-hover-color;
      }

      &:active,
      &:focus {
        color: @tabs-active-color;
      }
    }
  }

  &-extra-content {
    flex: none;
  }

  &-centered {
    > .@{tab-prefix-cls}-nav,
    > div > .@{tab-prefix-cls}-nav {
      .@{tab-prefix-cls}-nav-wrap {
        &:not([class*='@{tab-prefix-cls}-nav-wrap-ping']) {
          justify-content: center;
        }
      }
    }
  }

  // ============================ InkBar ============================
  &-ink-bar {
    position: absolute;
    background: @tabs-ink-bar-color;
    pointer-events: none;
  }

  // ============================= Tabs =============================
  &-tab {
    position: relative;
    display: inline-flex;
    align-items: center;
    margin: @tabs-horizontal-margin;
    padding: @tabs-horizontal-padding;
    font-size: @tabs-title-font-size;
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;

    &:last-of-type {
      margin-right: 0;
      margin-left: 0;
    }

    &-btn,
    &-remove {
      &:focus,
      &:active {
        color: @tabs-active-color;
      }
    }

    &-btn {
      outline: none;
    }

    &-remove {
      flex: none;
      margin-right: -@margin-xss;
      margin-left: @margin-xs;
      color: @text-color-secondary;
      font-size: @font-size-sm;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      transition: all @animation-duration-slow;

      &:hover {
        color: @heading-color;
      }
    }

    &:hover {
      color: @tabs-hover-color;
    }

    &&-active &-btn {
      color: @tabs-highlight-color;
      font-weight: 500;
    }

    &&-disabled {
      color: @disabled-color;
      cursor: not-allowed;
    }

    & &-remove .@{iconfont-css-prefix} {
      margin: 0;
    }

    .@{iconfont-css-prefix} {
      margin-right: @margin-sm;
    }
  }

  // =========================== TabPanes ===========================
  &-content {
    &-holder {
      flex: auto;
      min-width: 0;
      min-height: 0;
    }

    display: flex;
    width: 100%;

    &-animated {
      transition: margin @animation-duration-slow;
    }
  }

  &-tabpane {
    flex: none;
    width: 100%;
    outline: none;
  }
}`;
export default style;
