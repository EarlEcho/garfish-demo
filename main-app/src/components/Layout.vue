<template>
  <arco-layout class="layout-demo">
    <arco-layout-sider hide-trigger collapsible :collapsed="collapsed">
      <div class="logo">Echo Test Pro</div>
      <arco-menu :defaultOpenKeys="['1']" :defaultSelectedKeys="['1_2']" :style="{ width: '100%' }" @menuItemClick="onClickMenuItem">
        <arco-sub-menu key="1">
          <template #title>
            <span> <IconCalendar />主应用 </span>
          </template>
          <arco-menu-item key="1_2">主应用路由 1</arco-menu-item>
          <arco-menu-item key="1_3">主应用路由 2</arco-menu-item>
        </arco-sub-menu>

        <arco-sub-menu key="2">
          <template #title>
            <span> <IconCalendar />子应用二 </span>
          </template>
          <arco-menu-item key="2_2">子应用三（手动挂载）</arco-menu-item>
        </arco-sub-menu>
        <arco-menu-item key="/appVue3">
          <IconCalendar />
          子应用一
        </arco-menu-item>
      </arco-menu>
    </arco-layout-sider>
    <arco-layout>
      <arco-layout-header style="padding-left: 20px">
        <arco-button shape="round" @click="onCollapse">
          <IconCaretRight v-if="collapsed" />
          <IconCaretLeft v-else />
        </arco-button>
      </arco-layout-header>
      <arco-layout style="padding: 0 24px">
        <arco-breadcrumb :style="{ margin: '16px 0' }">
          <arco-breadcrumb-item>Home</arco-breadcrumb-item>
          <arco-breadcrumb-item>List</arco-breadcrumb-item>
          <arco-breadcrumb-item>App</arco-breadcrumb-item>
        </arco-breadcrumb>
        <arco-layout-content>
          <slot></slot>
        </arco-layout-content>
        <arco-layout-footer>
          <!-- {{ menuConfig }} -->
          footer
        </arco-layout-footer>
      </arco-layout>
    </arco-layout>
  </arco-layout>
</template>
<script>
import { defineComponent, ref, onMounted } from "vue";
import { MenuConfig } from "@/utils/menu.js";
import { Message } from "@arco-design/web-vue";
import { IconCaretRight, IconCaretLeft, IconHome, IconCalendar } from "@arco-design/web-vue/es/icon";
export default defineComponent({
  components: {
    IconCaretRight,
    IconCaretLeft,
    IconHome,
    IconCalendar,
  },
  setup() {
    const collapsed = ref(false);
    const onCollapse = () => {
      collapsed.value = !collapsed.value;
    };
    const menuConfig = ref(MenuConfig);
    return {
      collapsed,
      onCollapse,
      menuConfig,
      onClickMenuItem(key) {
        console.log(key);
        // Message.info({ content: `You select ${key}`, showIcon: true });
      },
    };
  },
});
</script>
<style scoped>
.layout-demo {
  height: 100%;
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
}

.layout-demo :deep(.arco-layout-sider) .logo {
  height: 32px;
  line-height: 32px;
  margin: 12px 8px;
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
}

.layout-demo :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}

.layout-demo :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
}

.layout-demo :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}

.layout-demo :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}

.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}
</style>
